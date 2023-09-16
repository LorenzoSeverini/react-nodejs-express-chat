import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow 
                projectId={import.meta.env.VITE_APP_CHAT_ENGINE_PROJECT_ID}
                // eslint-disable-next-line react/prop-types
                username={props.user.username}
                // eslint-disable-next-line react/prop-types
                secret={props.user.secret}
                style={{ height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage;