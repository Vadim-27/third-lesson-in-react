import { useFetchEvent } from 'hooks/useFetchEvent';

export const EventsSubPage = () => {
  const event = useFetchEvent();
    return <>{ event && <div>
        <p>{ event.name }</p>
        <img src={event.images[0].url} alt="" width="200" />
    </div> }</>;
};
