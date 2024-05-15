from django import template

register = template.Library()

#템플릿 필터 함수 생성
@register.filter #이렇게 애너테이션을 적용하면 템플릿에서 함수를 필터로 사용
def sub(value, arg):
    return value - arg
