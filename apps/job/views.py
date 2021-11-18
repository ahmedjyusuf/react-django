from django.shortcuts import render
from django.http import HttpResponse

from django.shortcuts import render
from django.shortcuts import get_object_or_404

# Create your views here.
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import JobSerializer
from .models import Job
import time	

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List':'/job_list/',
		'Detail View':'/job/<int:pk>/',
		'Create':'/post/',
		'Update':'/job-update/<str:pk>/',
		'Delete':'/delete/<int:id>/',
		}

	return Response(api_urls)


@api_view(['GET'])
def job_list(request):
	job = Job.objects.all().order_by('-id')
	serializer = JobSerializer(job, many=True)
	#print(serializer.data)
	return Response(serializer.data)

@api_view(['GET'])
def detail(request, id, *args, **kwargs):
	job = get_object_or_404(Job, id=id)
	serializer = JobSerializer(job, many=False)
	return Response(serializer.data)


@api_view(['DELETE', 'GET'])
def delete_job(request, id):
	job = get_object_or_404(Job, id=id)
	job.delete()
	return Response({'msg': 'Job successfully deleted'})

	

# Create your views here.
# def index(request):
# 	return render(request, 'jobs/index.html')

