#!/usr/bin/node
import requests

def get_completed_tasks_by_user(api_url):
    try:
        response = requests.get(api_url)
        if response.status_code == 200:
            tasks = response.json()

            # Create a dictionary to store the count of completed tasks for each user
            user_completed_tasks = {}

            # Iterate through the tasks and count completed tasks for each user
            for task in tasks:
                if task['completed']:
                    user_id = task['userId']
                    user_completed_tasks[user_id] = user_completed_tasks.get(user_id, 0) + 1

            # Print users with completed tasks and the number of completed tasks for each user
            for user_id, completed_tasks in user_completed_tasks.items():
                print(f"User ID: {user_id}, Completed Tasks: {completed_tasks}")
        else:
            print(f"Error: Unable to fetch data from the API. Status code: {response.status_code}")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    api_url = "https://jsonplaceholder.typicode.com/todos"
    get_completed_tasks_by_user(api_url)
