import { Link } from "react-router-dom";

import styles from "./ProfileMenu.module.css";


function ProfileMenu() {

  return (

    <div className={styles.dropdown}>


      <div className={styles.profileInfo}>

        <div className={styles.avatar}>
          👤
        </div>


        <span>
          User
        </span>

      </div>



      <Link to="/favorites">
        My List
      </Link>



      <button>
        Account
      </button>



      <button>
        Settings
      </button>



      <div className={styles.divider}></div>



      <button>
        Logout
      </button>


    </div>

  );

}


export default ProfileMenu;