from django.shortcuts import render
from django.shortcuts import get_object_or_404

# Create your views here.
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ArticleSerializer
from .models import Articles

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List':'/article_list/',
		'Detail View':'/article/<int:pk>/',
		'Create':'/post/',
		'Update':'/article-update/<str:pk>/',
		'Delete':'/delete/<int:id>/',
		}

	return Response(api_urls)

@api_view(['DELETE', 'GET'])
def delete_article(requests, id):
	article = get_object_or_404(Articles, id=id)
	article.delete()
	return Response({'msg': 'Article successfully deleted'})

@api_view(['GET'])
def article_list(request):
	articles = Articles.objects.all().order_by('-id')
	serializer = ArticleSerializer(articles, many=True)
	#print(serializer.data)
	return Response(serializer.data)

@api_view(['GET'])
def article(request, id):
	article = get_object_or_404(Articles, id=id)
	serializer = ArticleSerializer(article, many=False)
	#print(serializer.data)
	return Response(serializer.data)

@api_view(['POST', 'GET'])
def article_post(request):
	serializer = ArticleSerializer(data=request.data)

	# print('\n\n\n\n', serializer, '\n\n\n\n')

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)
#update articles
@api_view(['POST', 'GET'])
def article_update(request, id):
	article = Articles.objects.get(id=id)
	serializer = ArticleSerializer(instance=article, data=request.data)

	if serializer.is_valid():
		serializer.save()
	return Response(serializer.data)

def post_view(request):
    return render(request, 'news/post_form/index.html')


def index(request):
    return HttpResponse("Hello, world. You're at the news index waryaaa.")

def breaking(request):
    return HttpResponse('World breaking news')