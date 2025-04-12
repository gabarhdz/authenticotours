from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Media(models.Model):
    URL = models.CharField(max_length=250,null=False,blank=False)
    ALT = models.CharField(max_length=70)
    def __str__(self):
        return self.ALT


def user_directory_path(instance, filename):
    return f'./profile_pics/{instance.user.username}/{filename}'

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_pic = models.FileField(max_length=250, null=True, blank=True, upload_to=user_directory_path)

    def __str__(self):
        return self.user.username


class Includes(models.Model):
    name = models.CharField(max_length=75)
    def __str__(self):
        return self.name

class Recommendations(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name

class Tour(models.Model):
    tour_name = models.CharField(max_length=100,null=False,blank=False)
    tour_description = models.TextField(max_length=800,blank=False, null=False)
    detailed_description = models.TextField(max_length=9800,default=" ")
    duration = models.IntegerField(null=False,blank=False)
    includes = models.ManyToManyField(Includes,null=True)
    itinereray = models.TextField(max_length=4500,blank=False, default=" ")
    recommendations = models.ManyToManyField(Recommendations,null=False,blank=False)
    min_people = models.IntegerField(null=False,blank=False)
    photos = models.ManyToManyField(Media)

    def __str__(self):
        return self.tour_name

class Characterisitcs(models.Model):
    name = models.CharField(max_length=40)
    def __str__(self):
        return self.name


class Comments(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    tour = models.ForeignKey(Tour,on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    text=models.TextField(max_length=600)
    calification = models.IntegerField(default=5)
    characterisitcs = models.ManyToManyField(Characterisitcs)
    def __str__(self):
        return super().__str__()


