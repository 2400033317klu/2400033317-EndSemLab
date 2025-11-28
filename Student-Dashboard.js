body {
    margin: 0;
    display: flex;
    font-family: Arial;
}

/* Sidebar */
.sidebar {
    width: 150px;
    background: #333;
    color: white;
    padding: 15px;
}

/* Main */
.main {
    flex: 1;
    padding: 15px;
}

/* Top Bar */
.topbar {
    background: #007bff;
    color: white;
    padding: 10px;
    margin-bottom: 15px;
}

/* Cards */
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 10px;
}

.card {
    background: #eee;
    padding: 20px;
    text-align: center;
}

/* Activity */
.activity {
    margin-top: 15px;
    background: #f9f9f9;
    padding: 10px;
}

/* Responsive */
@media(max-width: 700px) {
    body {
        flex-direction: column;
    }
    .sidebar {
        width: 100%;
    }
}
