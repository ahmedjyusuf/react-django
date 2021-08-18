from django.contrib import admin
from .models import Articles

# Register your models here.
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'short_description', 'published_date')
admin.site.register(Articles, ArticleAdmin)
