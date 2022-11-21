var defaultThreads = [
    {
        id: 1,
        title: "Information",
        author: "Anonymous",
        date: Date.now(),
        content: "Thread content",
        comments: [
        ]
    },
    {
        id: 2,
        title: "Questions",
        author: "Anonymous",
        date: Date.now(),
        content: "Thread content 2",
        comments: [
        ]
    },
    {
        id: 3,
        title: "Tutoring",
        author: "Anonymous",
        date: Date.now(),
        content: "Thread content 3",
        comments: [
        ]
    },
    {
        id: 4,
        title: "Off Topic",
        author: "Anonymous",
        date: Date.now(),
        content: "Thread content 4",
        comments: [
        ]
    }
]

var threads = defaultThreads
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} 
else {
    threads = defaultThreads;
    localStorage.setItem('threads', JSON.stringify(defaultThreads));
}

//Samantha's page