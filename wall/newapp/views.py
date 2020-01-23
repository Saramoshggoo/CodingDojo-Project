from django.shortcuts import render,HttpResponse,redirect
from django.contrib import messages
from .models import *
import bcrypt
def index(request):
    return render(request,"index.html")
def register(request):
    errors= User.objects.basic_validator(request.POST)
    if len(errors)> 0:
        for key, value in errors.items():
            messages.error(request, value, extra_tags='register')
        return redirect('/')
    else:
        firstname=request.POST['firstname']
        lastname=request.POST['lastname']
        email=request.POST['email']
        passwords=request.POST['password']
        pw_hash=bcrypt.hashpw(passwords.encode(),bcrypt.gensalt()).decode()
        loggedin = User.objects.create(firstname=firstname,lastname=lastname,email=email,password=pw_hash)
        request.session['id']=loggedin.id
        return redirect('/show')
def login(request):
    user=User.objects.filter(email=request.POST['email_login'])
    if user:
        loggin_user=user[0]
        if bcrypt.checkpw(request.POST['password'].encode(),loggin_user.password.encode()):
            request.session['id']=loggin_user.id
            return redirect('/show')
    messages.error(request, "you have entered an invalid username or password", extra_tags="login")
    return redirect('/')

def show(request):
    if 'id' in request.session:
        context={
        
            'messages':Message.objects.all().order_by('-created_at'),
            "result":User.objects.get(id=request.session["id"]),
            'commentshows':Comment.objects.all(),
             
            }
      

        return render(request,"show.html",context)
    else:
        return redirect("/")
def post(request):
    post=request.POST['post']
    user=User.objects.get(id=request.session["id"])
    post=Message.objects.create(message=post,user=user)
    return redirect('/show')
def logout(request):
    del request.session['id']
    return redirect("/")
def delete(request,id):
    message=Message.objects.get(id=id)
    message.delete()
    return redirect('/show')
def comment(request,id):
    message=Message.objects.get(id=id)
    commen=request.POST['comment']
    user=User.objects.get(id=request.session['id'])
    Comment.objects.create(message=message,user=user, comment=commen)
    return redirect("/show")



