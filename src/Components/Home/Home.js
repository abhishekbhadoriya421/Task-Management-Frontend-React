
import CardGrid from '../CardGrid/CardGrid'
const Home = () => {
    const cards = [
        {
            imageUrl: "/user-management.jpg",
            title: 'User Management',
            content: "Manage User Related Configuration's",
            button: "Lunch",
            to: "/user-management/view"
        },
        {
            imageUrl: "/task-management.jpg",
            title: 'Task Management',
            content: "Manage Task Related Configuration",
            button: "Lunch",
            to: "/taks-management/view"
        },
        {
            imageUrl: "/chat-app-image.jpg",
            title: 'Chat Bot',
            content: "Discussion with teams and share ideas ",
            button: "Lunch",
            to: '#'
        },
        {
            imageUrl: "/DoMore.png",
            title: 'User Management',
            content: "Manage User Related Configuration's",
            button: "Lunch",
            to: '#'
        },
        {
            imageUrl: "/DoMore.png",
            title: 'Task Management',
            content: "Manage Task Related Configuration",
            button: "Lunch",
            to: "/taks-management/view"
        },
        {
            imageUrl: "/DoMore.png",
            title: 'User Management',
            content: "Manage User Related Configuration's",
            button: "Lunch",
            to: '#'
        },
        {
            imageUrl: "/DoMore.png",
            title: 'User Management',
            content: "Manage User Related Configuration's",
            button: "Lunch",
            to: '#'
        },
    ];
    return (<div>
        <div className="card border-0">
            <div className="card-body">
                <div className="row">
                    <div className='col-md-12'>
                        <h2>Dashboard</h2>
                    </div>
                </div>
                {(!cards) ?
                    <div>No Card's Available</div>
                    :
                    <div className="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        {cards.map((card, index) => {
                            return (
                                <CardGrid
                                    key={index}
                                    imageUrl={card.imageUrl}
                                    title={card.title}
                                    content={card.content}
                                    button={card.button}
                                    className="col-md-4 col-sm-6 mb-4"
                                    to={card.to}
                                />
                            );
                        })}
                    </div>
                }
            </div>
        </div>
    </div>);
}

export default Home;