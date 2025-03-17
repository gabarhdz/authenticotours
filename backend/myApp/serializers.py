from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class MediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Media
        field = ['id','url','alt']

class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Profile
        fields = ['id','user','profile_pic']

class IncludesSerializer(serializers.ModelSerializer):  
    class Meta:
        model = Includes
        field = ['id','name']

class TourSerializer(serializers.ModelSerializer):
    photos = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    includes = serializers.PrimaryKeyRelatedField(many=True,read_only=True)
    class Meta:
        model =Tour
        fields = ['id','name','description','duration','photos','includes','min_people']

class CharacteristicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Characterisitcs
        field = ['id','name']

class CommentSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(Profile.objects.all())
    photos = serializers.PrimaryKeyRelatedField(many=True,read_only=True)
    characteristics = serializers.PrimaryKeyRelatedField(many=True,read_only=True)
    class Meta:
        model = Characterisitcs
        field = ['id','user','photos','title','text','calification','characteristics']
