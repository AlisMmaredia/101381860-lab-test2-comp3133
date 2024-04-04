export interface Mission {
    mission_name: string;
    launch_year: string;
    links: MissionLinks;

    launch_success: string;
    land_success: string;
    details: string;
  }
  
  export interface MissionLinks {
    mission_patch: string;
    mission_patch_small: string;
  }