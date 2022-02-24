URL = "https://us-central1-marcy-playground.cloudfunctions.net/ordoroCodingTest"
info = requests.get(URL).json()


def clean_data(info):
    unqiue_emails, april_emails, user_domain_counts = set(), [], {}

    if info is not None:
        check = info['data']

        for block in check:
            #Depending on the context, some companies reject data if either field contains null values. If Ordoro only wanted data that contained no null values. I would use this if condition, however if they wanted those values regardless. I would implement the following logic after this if statement.
            # if not block['email'] or not block['login_date']:
            #     continue
            #Clean data and use variables as check points
            email_check = block["email"].strip() if block["email"] else None
            login_check = block["login_date"].strip() if block["login_date"] else None
            domain_check = block["email"].strip().split("@")[1] if block["email"] else None

            if email_check and email_check not in unqiue_emails:
                unqiue_emails.add(email_check)

            if email_check and login_check and login_check[5:7] == '04':
                april_emails.append(email_check)

                # In the post example of the API, it asks the user to send a list of emails for users in april. However in the directions, it asks for a list of users that logged in for the month of april normailized to the UTC timezone. I was not sure how I was supposed to send the data so I decided to show you both ways. In the commented out code below this. I would send back the april emails users and the login_dates formatted as such in a dictionary object. I was not sure if this is what was desired based off the post request example but I wanted to showcase the option.

                # april_emails.append({"email": email_check, "login_date": login_check[:19] + "Z"})

            #Increment user_domain_count by 1
            user_domain_counts[domain_check] = user_domain_counts.get(domain_check, 0) + 1

    return [list(unqiue_emails), april_emails, user_domain_counts]


def postRequest(info):
    unqiue_emails, april_emails, user_domain_counts = clean_data(info)
    
    sendingData = {
        "your_email_address": "Engineermaukan@gmail.com",
        "unqiue_emails": unqiue_emails,
        "user_domain_counts": user_domain_counts,
        "april_emails": april_emails
    }
    
    return sendingData


print(postRequest(info))