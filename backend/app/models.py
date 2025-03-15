from django.contrib.auth.models import User
from django.utils.timezone import now
from django.db import models

class Profile(models.Model):  
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    profile_pic = models.URLField(max_length=600, blank=True, null=True)

    def __str__(self):
        return self.user.username  

class Tour(models.Model):
    tour_name=models.TextField(max_length=150)
    description = models.TextField(max_length=4500)
    min_persons = models.IntegerField()
    includes = models.ManyToManyField('Includes')  
    def __str__(self):
        return self.tour_name
    
class CommentCharacteristics(models.Model):
    characteristic_name = models.TextField(max_length=20,null=False)
    def __str__(self):
        return self.characteristic_name

class Comment(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    tour = models.ForeignKey(Tour, on_delete=models.CASCADE, default=1)
    characteristics = models.ManyToManyField(CommentCharacteristics, blank=True)  # Ahora puede tener varias
    date = models.DateField(default=now)
    comment_text = models.TextField(max_length=1200)
    calification = models.IntegerField(default=1)

    def __str__(self):
        return self.comment_text


class Reply(models.Model):
    profile = models.ForeignKey(Profile,on_delete=models.CASCADE)
    parent_comment = models.ForeignKey(Comment,on_delete=models.CASCADE)
    comment_text = models.TextField(max_length=1200)


class Includes(models.Model):
    include_name = models.TextField(max_length=90)
    def __str__(self):
        return self.include_name


class Photos(models.Model):
    tour = models.ForeignKey(Tour,on_delete=models.CASCADE,related_name='photos')
    url_photo = models.URLField(max_length=500)
    alt_photo = models.TextField(max_length=80)
    def __str__(self):
        return super().__str__()

