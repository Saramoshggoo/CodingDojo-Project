from django.shortcuts import render,HttpResponse,redirect
from .models import *
from django.contrib import messages
def index(request):
        
    context={
        'result':Show.objects.all(),

    }
    return render(request,"index.html",context)
def forms(request):
    return render(request,"new.html")
def new(request):
    errors = Show.objects.basic_validator(request.POST)
    if len(errors)> 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/new')
    else:
        title= request.POST['title']
        network= request.POST['network']
        date= request.POST['release']
        desc= request.POST['desc']
        Show.objects.create(title=title,network=network,release_day=date,desc=desc)
        show=Show.objects.last()
        return redirect(f"/present/{show.id}") 
def present(request, id):
    context={
    'present': Show.objects.get(id=id)}
    return render(request,"present.html",context)
def delete(request,id):
    dele= Show.objects.get(id=id)
    dele.delete()
    return redirect("/")
def gotoedit(request,id):
    context={
        'editable':Show.objects.get(id=id)
    }
    return render(request,"edit.html",context)
def edit(request,id):
    errors = Show.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect(f'/gotoedit/{id}')
    else:
        edi=Show.objects.get(id=id)
        edi.title=request.POST['title']
        edi.network=request.POST['network']
        edi.release_day=request.POST['release']
        edi.desc=request.POST['desc']
        edi.save()
        return redirect("/")