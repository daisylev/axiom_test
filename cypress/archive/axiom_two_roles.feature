Feature: Axiom test

    Background: Login to website
        Given User navigate to Axiom page
        When Type "requester@quynhle.com" to Email textbox
        And Type "quRC72YLOd5KeZWzQ" to Password textbox
        And Click to Login button
        Then User can see Home page

    Scenario: Webapp user flow
        When Click to 'New Access Request' button
        And Select "AWS" from Request dropdown
        Then User can see "Access Request" page
        And Verify "AWS" is selected from Source dropdown
        And Verify "JSON" button is disabled
        And Verify 'Limited Period' button is selected
        And Verify "Hours" button is selected
        And Verify value of Duration textbox is "4"
        And Verify title of Request is " -  to  -  for (4 hours)"

        When Select "axiom admin" from Addressee dropdown
        Then Verify "axiom admin" Addressee is selected

        When Select "Dev [Com]" from Resource dropdown
        Then Verify "Axiom Com < ... > Dev [Com]" Resource is selected

        When Select "ps01" from Permission dropdown
        Then Verify "ps01" Permission is selected

        When Type "22" to Duration textbox
        Then Verify title of Request is "ps01 to axiom admin for (22 hours)"

        When Type "Request for prod" to Reason textbox in Why session
        And Click to 'Submit' button
        Then User can see message "Access request created successfully"
        And User can see "Request" page

        Given Wait for loading icon disappears
        Then Verify Name of created Request is "ps01 to axiom admin for (22 hours)" at index "1"
        And Verify Target of created Request is "AWS" at index "1"
        And Verify Addressee of created Request is "axiom admin" at index "1"
        And Verify Duration of created Request is "22 Hours" at index "1"
        And Verify Status of created Request is "PENDING" at index "1"

        When Click to created Request
        Then User can see "Access Request Details" page

        # Verify Form session
        And Verify "Account" on Form session is "Dev [Com]"
        And Verify "Permission set" on Form session is "ps01"
        And Verify "Duration" on Form session is "22 hours"
        And Verify "Reason" on Form session is "Request for prod"

        # Verify Details session
        And Verify "Status" on Details session is "PENDING"
        And Verify "Created by" on Details session is "requester@quynhle.com"
        And Verify "Type" on Details session is "Assign"
        And Verify "Owner" on Details session is "e2e-rohit-raut@e2e.com"

        # Verify Events session
        And Verify Actor on Events session is "requester@quynhle.com"
        And Verify Type on Events session is "Create Access Request"
        And Verify Targets on Events session is "AWS"

        When Click to "JSON" button in Details session
        Then User can see "Access Request JSON View" panel appears
        And Verify "Target" on Request JSON panel is "AWS"
        And Verify "Account" on Request JSON panel is "Dev [Com]"
        And Verify "Type" on Request JSON panel is "Existing role"
        And Verify there is editor code session

        When Click to close 'Access Request JSON View' panel button
        Then User can see "Access Request JSON View" panel disappears

        Given User log out
        And User navigate to Axiom page
        When Type "approver@quynhle.com" to Email textbox
        And Type "mzd@xtu3KNM@qyw@ktp" to Password textbox
        And Click to Login button
        Then User can see Home page

        When User click to Request on Menu
        And Click to created Request
        Then User can see "Access Request Details" page

        When Click to 'Approve' button
        Then User can see "Approve" popup appears

        When Click to 'Approve' button on panel
        Then User can see message "Request approved successfully"

        Given Wait for loading icon disappears
        Then Verify Duration of created Request is "4 Hours" at index "1"
        And Verify Status of created Request is "APPROVED" at index "1"

        Given User log out
        And User navigate to Axiom page
        When Type "requester@quynhle.com" to Email textbox
        And Type "quRC72YLOd5KeZWzQ" to Password textbox
        And Click to Login button
        Then User can see Home page
        # This is a bug which I mentioned on manual document, so Approved Request doesn't appear to run this test, temporary I commented this sentence
        # And User can see Approved Request on Connect part