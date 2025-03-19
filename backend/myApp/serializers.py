from rest_framework import serializers
from .models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class MediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Media
        fields = '__all__'

class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Profile
        fields = '__all__'

class IncludesSerializer(serializers.ModelSerializer):  
    class Meta:
        model = Includes
        fields = '__all__'

class TourSerializer(serializers.ModelSerializer):
    photos = MediaSerializer(many=True, read_only=True)
    includes = IncludesSerializer(many=True,read_only=True)
    class Meta:
        model =Tour
        fields = '__all__'

class CharacteristicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Characterisitcs
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    #user = serializers.PrimaryKeyRelatedField(Profile.objects.all())
    photos = MediaSerializer(many=True,read_only=True)
    characteristics = CharacteristicSerializer(many=True,read_only=True)
    class Meta:
        model = Characterisitcs
        fields = '__all__'
