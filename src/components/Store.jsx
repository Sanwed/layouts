import IconSwitch from './IconSwitch.jsx';
import CardsView from './CardsView.jsx';
import {useState} from 'react';
import ListView from './ListView.jsx';

function Store({products}) {
  const [view, setView] = useState('view_list');
  
  return (
    <div>
      <div className="mb-5 flex justify-end">
        <IconSwitch
          icon={view}
          onSwitch={() => view === 'view_list'
            ? setView('view_module')
            : setView('view_list')}
        />
      </div>
      {view === 'view_list'
        ? <ListView items={products} />
        : <CardsView cards={products} />
      }
    </div>
  );
}

export default Store;
