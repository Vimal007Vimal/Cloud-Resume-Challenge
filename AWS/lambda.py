import json
import boto3

# Initialize the DynamoDB resource and table outside of the handler
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('vimal-cv')

def lambda_handler(event, context):
    try:
        # Retrieve the item from the table
        response = table.get_item(Key={'id': '1'})
        item = response.get('Item', {})
        
        # Get the current views count, defaulting to 0 if not found
        views = item.get('views', 0)
        views += 1
        
        # Print the new views count
        print(views)
        
        # Update the item in the table with the new views count
        table.put_item(Item={'id': '1', 'views': views})

        return {'views': views}
    
    except Exception as e:
        print(f"Error: {e}")
        return {'error': str(e)}
