from django.contrib import admin
from .models import Profile, Tour, Comment, CommentCharacteristics, Reply, Includes, Photos

# Registrar todos los modelos en el panel de administración
admin.site.register(Profile)
admin.site.register(Tour)
admin.site.register(Comment)
admin.site.register(CommentCharacteristics)
admin.site.register(Reply)
admin.site.register(Includes)
admin.site.register(Photos)
