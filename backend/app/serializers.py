from rest_framework import serializers
from .models import Profile, Tour, Comment, CommentCharacteristics, Reply, Includes, Photos

class ProfileSerializer(serializers.ModelSerializer):
    user = serializers.StringRelatedField()  
    
    class Meta:
        model = Profile
        fields = '__all__'

class IncludesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Includes
        fields = '__all__'

class TourSerializer(serializers.ModelSerializer):
    includes = IncludesSerializer(many=True, read_only=True)
    
    class Meta:
        model = Tour
        fields = '__all__'

class CommentCharacteristicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommentCharacteristics
        fields = ['id','characteristic_name']
from rest_framework import serializers
from .models import Comment, Profile, Tour, CommentCharacteristics

class CommentSerializer(serializers.ModelSerializer):
    profile_name = serializers.CharField(source='profile.user.username', read_only=True)  # Solo lectura
    tour_name = serializers.CharField(source='tour.tour_name', read_only=True)  # Solo lectura
    characteristics = serializers.PrimaryKeyRelatedField(
        queryset=CommentCharacteristics.objects.all(), many=True  # Permite enviar IDs de características
    )

    class Meta:
        model = Comment
        fields = [
            'id',
            'profile',  # Se envía como ID (puedes cambiarlo por profile_name si quieres solo el nombre)
            'profile_name',
            'tour',  # Se envía como ID
            'tour_name',
            'characteristics',  # Se envían como IDs (ajustable)
            'date',
            'comment_text',
            'calification',
        ]
    
    def create(self, validated_data):
        """Sobreescribe create para manejar ManyToMany correctamente"""
        characteristics_data = validated_data.pop('characteristics', [])
        comment = Comment.objects.create(**validated_data)
        comment.characteristics.set(characteristics_data)  # Asigna las características al comentario
        return comment


class ReplySerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(read_only=True)
    parent_comment = CommentSerializer(read_only=True)
    
    class Meta:
        model = Reply
        fields = '__all__'

class PhotosSerializer(serializers.ModelSerializer):
    tour = TourSerializer(read_only=True)
    
    class Meta:
        model = Photos
        fields = '__all__'
