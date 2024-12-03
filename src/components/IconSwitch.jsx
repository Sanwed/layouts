import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';

function IconSwitch({icon, onSwitch}) {
  
  return (
    <button onClick={onSwitch} className='w-10'>
      {icon === 'view_module'
        ? <ViewModuleIcon color="success" fontSize="large"/>
        : <ViewListIcon color="success" fontSize="large"/>
      }
    </button>
  );
}

export default IconSwitch;
