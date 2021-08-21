from django.urls import path
from django.views.generic import TemplateView

from . import views

urlpatterns = [
    path('api/', views.apiOverview, name="api-overview"),
    path('api/article_list/', views.article_list, name='article_list'),
    path('api/article/<int:id>/', views.article, name='article'),
    path('api/post/', views.article_post, name='post_article'),
    path('api/update/<int:id>/', views.article_update, name='update_article'),
    path('api/delete/<int:id>/', views.delete_article, name='delete_article'),
    path('', TemplateView.as_view(template_name='index.html')),   
    path('post_form/', TemplateView.as_view(template_name='index.html')),
    path('article/<int:id>/', TemplateView.as_view(template_name='index.html')),
]

#/news/post_form