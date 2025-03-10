from django.contrib.auth.models import User
from django.db import models

class Profile(models.Model):  
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    profile_pic = models.URLField(max_length=600, blank=True, null=True)

    def __str__(self):
        return self.user.username  

class Comment(models.Model):
    profile = models.ForeignKey(Profile,on_delete=models.CASCADE)
    comment_text = models.TextField(max_length=1200)
    def __str__(self):
        return self.comment 