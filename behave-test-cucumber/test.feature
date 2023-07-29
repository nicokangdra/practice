Feature: Dicoding Jobs

    Background: Get Link
        Given Launch Browser`

    Scenario: Grow with Google Career Fair Text
        When Go to "https://jobs.dicoding.com/gwgcf/event"
        Then verify Text
        And close Browser

    Scenario: Login to page
        When Go to "https://jobs.dicoding.com/list"
        Then verify jobs
        And close Browser
    
    Scenario Outline: Login to mutiple page
        When Go to "<link>"
        Then Display the web

        Examples:
            | link |
            | https://www.googleasdas.com/ |
            | https://www.google.com/ |
            | https://otakudesu.lol/ |