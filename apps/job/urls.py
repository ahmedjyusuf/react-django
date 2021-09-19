from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('job_list/', views.job_list, name='job list'),
    path('api/', views.apiOverview, name='api overview'),
    path('api/job/<int:id>/', views.detail, name='job detail'),
    path('api/delete/<int:id>/', views.delete_job, name='delete job'),

]