from behave import *
from selenium import webdriver
from selenium.webdriver.common.by import By
from time import sleep

@given(u'Launch Browser')
def step_impl(context):
    context.driver = webdriver.Edge()


@when(u'Go to "{link}"')
def step_impl(context,link):
    try:
        context.driver.get(link)
    except:
        assert False, "Link can't be accessed"


@then(u'verify Text')
def step_impl(context):
    sleep(2.5)
    a = context.driver.find_element(By.XPATH,"/html[1]/body[1]/div[1]/div[2]/main[1]/section[1]/div[1]/h2[1]").get_attribute('innerHTML')
    assert a == "Grow with Google Career Fair 2023"

@then(u'verify jobs')
def step_impl(context):
    sleep(2)
    a = context.driver.find_element(By.CLASS_NAME,"Joblist_listVacancy__IDPTk").is_displayed()
    assert a is True

@then(u'close Browser')
def step_impl(context):
    context.driver.close()


@then(u'Display the web')
def step_impl(context):
    pass