async function getUserTaskCompletionReport() {
    try {
        const [usersRes, todosRes] = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users"),
            fetch("https://jsonplaceholder.typicode.com/todos")
        ]);

        if (!usersRes.ok || !todosRes.ok) {
            throw new Error("Unable to load report.");
        }

        const users = await usersRes.json();
        const todos = await todosRes.json();

        // 1 & 2. Match user.id to todo.userId, calculate totals, pending, completed & percentage
        const userReports = users.map(user => {
            const userTodos = todos.filter(todo => todo.userId === user.id);
            const total = userTodos.length;
            const completed = userTodos.filter(todo => todo.completed).length;
            const pending = total - completed;
            const completionPercentage = total > 0 ? (completed / total) * 100 : 0;

            return {
                id: user.id,
                name: user.name, // or user.username depending on starter data property
                total,
                completed,
                pending,
                percentage: completionPercentage
            };
        });

        // 3. Sort percentage descending, then user ID ascending
        userReports.sort((a, b) => {
            if (b.percentage !== a.percentage) {
                return b.percentage - a.percentage; // Percentage descending
            }
            return a.id - b.id; // User ID ascending
        });

        // 4 & 7. Print all users in required output format
        userReports.forEach(user => {
            console.log(`User: ${user.name}`);
            console.log(`Total: ${user.total} | Completed: ${user.completed} | Pending: ${user.pending}`);
            console.log(`Completion: ${user.percentage.toFixed(2)}%`);
        });

    } catch (error) {
        // 6. Print "Unable to load report." on failure
        console.log("Unable to load report.");
    }
}

// 6. Invoke your function
getUserTaskCompletionReport();