@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        # Add your authentication logic here (e.g., check against a database)
        # For simplicity, let's consider a basic check
        if username == 'your_username' and password == 'your_password':
            return 'Login successful'
        else:
            return 'Invalid credentials'
    return render_template('login.html')