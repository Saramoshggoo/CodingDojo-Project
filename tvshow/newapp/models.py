from django.db import models


class ManageShow(models.Manager):
    def basic_validator(self, postData):
        errors = {}
        if len(postData['title']) < 2:
            errors["name"] = "Title name should be at least 5 characters"
        if len(postData['network'])<3:
            errors["network"]="Network should be at least 3 characters"
        if len(postData['desc']) <10 and  len(postData['desc']) !=0 :
            errors["desc"] = " description should be at least 10 characters"
        if Show.objects.filter(title=postData["title"]):
            errors["title"]="choose diffenet one "
        return errors
class Show(models.Model):
    title=models.CharField(max_length=255)
    network=models.CharField(max_length=255)
    release_day=models.DateTimeField(auto_now=False,auto_now_add=False)
    desc=models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects=ManageShow()


