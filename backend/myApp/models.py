from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Media(models.Model):
    URL = models.CharField(max_length=250,null=False,blank=False)
    ALT = models.CharField(max_length=70)
    def __str__(self):
        return self.ALT


class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    profile_pic = models.OneToOneField(Media, on_delete=models.SET_NULL, null=True, blank=True)
    def __str__(self):
        return super().__str__()


class Includes(models.Model):
    name = models.CharField(max_length=75)
    def __str__(self):
        return self.name


class Tour(models.Model):
    tour_name = models.CharField(max_length=100,null=False,blank=False)
    tour_description = models.TextField(max_length=800,blank=False, null=False)
    duration = models.IntegerField(null=False,blank=False)
    includes = models.ManyToManyField(Includes,null=True,blank=True)
    min_people = models.IntegerField(null=False,blank=False)
    photos = models.ManyToManyField(Media)

    def __str__(self):
        return self.tour_name

class Characterisitcs(models.Model):
    name = models.CharField(max_length=40)
    def __str__(self):
        return super().__str__()


class Comments(models.Model):
    user = models.ForeignKey(Profile,on_delete=models.CASCADE)
    tour = models.ForeignKey(Tour,on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    text=models.TextField(max_length=600)
    calification = models.IntegerField(default=5)
    characterisitcs = models.ManyToManyField(Characterisitcs)
    def __str__(self):
        return super().__str__()


