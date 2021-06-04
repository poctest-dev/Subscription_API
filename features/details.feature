Feature: Get Subscription detail of the provided user 
 

  Scenario Outline: Fetch subscription information
    Given I am on Site Homepage
    When I enter <cid>
    And  I click submit button
    Then I should get "<subscription>" details of customer
   

    Examples:
        | cid      | subscription                    |
        | 1        |  "LiveSafe,Mvision_Endpoint"    |
        | 2        |  "Mvision_Cloud,Mobile_Mvision" |

   
    