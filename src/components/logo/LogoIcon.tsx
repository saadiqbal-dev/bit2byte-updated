import React from 'react';
import { motion } from 'framer-motion';

export const LogoIcon = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-10 h-10"
    >
      <svg 
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="100%"
        viewBox="0 0 500 500"
        enableBackground="new 0 0 500 500"
        className="w-full h-full"
      >
        <path 
          fill="currentColor" 
          opacity="1.000000" 
          stroke="none" 
          d="M265.000000,501.000000 C176.666687,501.000000 88.833374,501.000000 1.000047,501.000000 C1.000031,334.333405 1.000031,167.666794 1.000016,1.000137 C167.666565,1.000091 334.333130,1.000091 500.999756,1.000046 C500.999847,167.666519 500.999847,334.333038 500.999939,500.999786 C422.500000,501.000000 344.000000,501.000000 265.000000,501.000000 M311.962189,361.526306 C314.615692,359.204254 317.579437,357.150391 319.863342,354.508759 C326.173096,347.210754 333.124817,340.229034 338.078552,332.064087 C343.114777,323.763214 346.130371,314.225311 349.922577,305.183685 C354.325928,294.684845 354.611115,283.401093 354.753387,272.380249 C354.882812,262.353394 354.641571,252.127838 351.046173,242.354828 C347.275238,232.104721 342.826965,222.354034 334.542389,214.909058 C330.229523,211.033310 325.676727,207.424561 320.915070,203.429001 C327.005615,200.076080 333.456940,197.631027 338.534515,193.498184 C348.997192,184.982162 358.854401,175.829102 365.860229,163.853516 C373.461334,150.860458 378.867279,137.420639 378.991364,122.197418 C379.044922,115.626305 380.422150,113.759483 386.448608,111.165657 C390.950836,109.227859 395.383545,107.069679 399.655579,104.668701 C407.850067,100.063232 415.796997,95.010323 424.055817,90.528496 C431.667969,86.397598 439.668304,82.983650 447.294708,78.877037 C460.386292,71.827568 473.314880,64.475677 486.322449,57.269825 C490.759613,54.811760 495.228607,52.411121 499.683044,49.984253 C498.695465,49.090778 497.910919,48.891079 497.187714,49.024323 C487.448151,50.818794 477.688782,52.523617 467.994476,54.539753 C462.134796,55.758404 456.423126,57.684109 450.567627,58.928310 C439.305054,61.321442 427.915955,63.150009 416.710175,65.771881 C401.099182,69.424469 385.635986,73.703476 370.059845,77.511116 C344.275940,83.814087 318.388947,89.706131 292.672028,96.267693 C279.558563,99.613533 266.698914,103.969284 253.763687,107.994370 C238.493057,112.746147 223.187851,117.407433 208.046738,122.547127 C198.866852,125.663277 190.017410,129.738937 180.935516,133.160553 C155.682755,142.674561 130.888840,153.205246 107.294083,166.364792 C105.467522,167.383514 103.712372,169.682281 103.206230,171.706665 C101.488602,178.576492 100.346954,185.590317 98.759109,193.705048 C103.292183,191.485672 106.990181,189.844254 110.524071,187.903946 C115.408058,185.222366 120.067009,182.120956 125.004318,179.548645 C133.445831,175.150742 142.034668,171.036102 150.550308,166.779800 C159.356140,162.378464 168.050354,157.739182 176.972107,153.588089 C187.602570,148.641937 198.370041,143.978256 209.176758,139.426315 C219.320755,135.153488 229.452591,130.778778 239.844925,127.187141 C252.793228,122.712120 265.990143,118.951317 279.104401,114.963379 C288.070831,112.236763 296.968811,109.155006 306.094177,107.110359 C321.292175,103.705055 336.624664,100.877037 351.948486,98.067398 C358.345123,96.894569 364.864594,96.391693 371.328186,95.584213 C371.437469,96.104889 371.546753,96.625557 371.656006,97.146233 C366.637604,100.014877 361.680054,102.997002 356.588196,105.728752 C345.693268,111.573845 334.603485,117.066223 323.828369,123.121094 C313.119354,129.138809 302.704895,135.680069 292.148315,141.970001 C285.303406,146.048370 278.327667,149.918518 271.607697,154.191986 C264.841522,158.494858 258.348114,163.224350 251.683044,167.689102 C242.723160,173.691086 233.647583,179.522415 224.747345,185.610703 C218.531509,189.862671 212.574036,194.490341 206.413330,198.825378 C200.490875,202.992767 194.174164,206.647598 188.532516,211.155670 C178.984818,218.784866 169.841263,226.919205 160.510620,234.820877 C154.580414,239.842896 148.373871,244.568176 142.729904,249.891617 C134.489960,257.663635 126.568565,265.779785 118.658943,273.893097 C113.981285,278.691193 109.221565,283.485107 105.152946,288.783295 C99.135406,296.619385 93.649139,304.867371 88.035973,313.008484 C84.967049,317.459534 81.512428,321.779053 79.269684,326.637054 C74.756813,336.412384 70.461845,346.349091 67.016205,356.536865 C64.305107,364.552826 63.003403,373.045441 60.864979,382.231323 C66.731789,381.725739 70.940948,381.051697 75.150856,381.047028 C136.476242,380.978882 197.801743,380.982727 259.127197,381.016235 C270.269440,381.022339 280.618805,377.394012 290.689117,373.456085 C297.962616,370.611755 304.486145,365.849731 311.962189,361.526306 z"
        />
        <path 
          fill="#4EADE2" 
          opacity="1.000000" 
          stroke="none" 
          d="M311.653198,361.734650 C304.486145,365.849731 297.962616,370.611755 290.689117,373.456085 C280.618805,377.394012 270.269440,381.022339 259.127197,381.016235 C197.801743,380.982727 136.476242,380.978882 75.150856,381.047028 C70.940948,381.051697 66.731789,381.725739 60.864979,382.231323 C63.003403,373.045441 64.305107,364.552826 67.016205,356.536865 C70.461845,346.349091 74.756813,336.412384 79.269684,326.637054 C81.512428,321.779053 84.967049,317.459534 88.035973,313.008484 C93.649139,304.867371 99.135406,296.619385 105.152946,288.783295 C109.221565,283.485107 113.981285,278.691193 118.658943,273.893097 C126.568565,265.779785 134.489960,257.663635 142.729904,249.891617 C148.373871,244.568176 154.580414,239.842896 160.510620,234.820877 C169.841263,226.919205 178.984818,218.784866 188.532516,211.155670 C194.174164,206.647598 200.490875,202.992767 206.413330,198.825378 C212.574036,194.490341 218.531509,189.862671 224.747345,185.610703 C233.647583,179.522415 242.723160,173.691086 251.683044,167.689102 C258.348114,163.224350 264.841522,158.494858 271.607697,154.191986 C278.327667,149.918518 285.303406,146.048370 292.148315,141.970001 C302.704895,135.680069 313.119354,129.138809 323.828369,123.121094 C334.603485,117.066223 345.693268,111.573845 356.588196,105.728752 C361.680054,102.997002 366.637604,100.014877 371.656006,97.146233 C371.546753,96.625557 371.437469,96.104889 371.328186,95.584213 C364.864594,96.391693 358.345123,96.894569 351.948486,98.067398 C336.624664,100.877037 321.292175,103.705055 306.094177,107.110359 C296.968811,109.155006 288.070831,112.236763 279.104401,114.963379 C265.990143,118.951317 252.793228,122.712120 239.844925,127.187141 C229.452591,130.778778 219.320755,135.153488 209.176758,139.426315 C198.370041,143.978256 187.602570,148.641937 176.972107,153.588089 C168.050354,157.739182 159.356140,162.378464 150.550308,166.779800 C142.034668,171.036102 133.445831,175.150742 125.004318,179.548645 C120.067009,182.120956 115.408058,185.222366 110.524071,187.903946 C106.990181,189.844254 103.292183,191.485672 98.759109,193.705048 C100.346954,185.590317 101.488602,178.576492 103.206230,171.706665 C103.712372,169.682281 105.467522,167.383514 107.294083,166.364792 C130.888840,153.205246 155.682755,142.674561 180.935516,133.160553 C190.017410,129.738937 198.866852,125.663277 208.046738,122.547127 C223.187851,117.407433 238.493057,112.746147 253.763687,107.994370 C266.698914,103.969284 279.558563,99.613533 292.672028,96.267693 C318.388947,89.706131 344.275940,83.814087 370.059845,77.511116 C385.635986,73.703476 401.099182,69.424469 416.710175,65.771881 C427.915955,63.150009 439.305054,61.321442 450.567627,58.928310 C456.423126,57.684109 462.134796,55.758404 467.994476,54.539753 C477.688782,52.523617 487.448151,50.818794 497.187714,49.024323 C497.910919,48.891079 498.695465,49.090778 499.683044,49.984253 C495.228607,52.411121 490.759613,54.811760 486.322449,57.269825 C473.314880,64.475677 460.386292,71.827568 447.294708,78.877037 C439.668304,82.983650 431.667969,86.397598 424.055817,90.528496 C415.796997,95.010323 407.850067,100.063232 399.655579,104.668701 C395.383545,107.069679 390.950836,109.227859 386.448608,111.165657 C380.422150,113.759483 379.044922,115.626305 378.991364,122.197418 C378.867279,137.420639 373.461334,150.860458 365.860229,163.853516 C358.854401,175.829102 348.997192,184.982162 338.534515,193.498184 C333.456940,197.631027 327.005615,200.076080 320.915070,203.429001 C325.676727,207.424561 330.229523,211.033310 334.542389,214.909058 C342.826965,222.354034 347.275238,232.104721 351.046173,242.354828 C354.641571,252.127838 354.882812,262.353394 354.753387,272.380249 C354.611115,283.401093 354.325928,294.684845 349.922577,305.183685 C346.130371,314.225311 343.114777,323.763214 338.078552,332.064087 C333.124817,340.229034 326.173096,347.210754 319.863342,354.508759 C317.579437,357.150391 314.615692,359.204254 311.653198,361.734650 M162.000839,282.684082 C159.539230,294.300690 157.077606,305.917267 154.589447,317.659180 C156.086624,317.861359 156.570282,317.983704 157.053955,317.983856 C188.865921,317.995392 220.678360,318.070770 252.488998,317.866669 C255.180450,317.849426 258.332428,316.536224 260.445038,314.813110 C264.650299,311.383148 268.131042,307.081970 272.181244,303.441223 C279.728851,296.656708 282.971802,287.829712 283.891113,278.185364 C284.789398,268.761780 283.047760,259.668823 277.835815,251.480148 C273.802124,245.142685 268.072266,241.141434 260.611206,241.113541 C246.192307,241.059631 231.772415,241.814789 217.350174,241.957169 C203.987915,242.089081 191.955750,245.825851 181.479462,254.200394 C172.321579,261.521057 166.095184,270.940002 162.000839,282.684082 z"
        />
        <path 
          fill="currentColor" 
          opacity="1.000000" 
          stroke="none" 
          d="M162.003235,282.265808 C166.095184,270.940002 172.321579,261.521057 181.479462,254.200394 C191.955750,245.825851 203.987915,242.089081 217.350174,241.957169 C231.772415,241.814789 246.192307,241.059631 260.611206,241.113541 C268.072266,241.141434 273.802124,245.142685 277.835815,251.480148 C283.047760,259.668823 284.789398,268.761780 283.891113,278.185364 C282.971802,287.829712 279.728851,296.656708 272.181244,303.441223 C268.131042,307.081970 264.650299,311.383148 260.445038,314.813110 C258.332428,316.536224 255.180450,317.849426 252.488998,317.866669 C220.678360,318.070770 188.865921,317.995392 157.053955,317.983856 C156.570282,317.983704 156.086624,317.861359 154.589447,317.659180 C157.077606,305.917267 159.539230,294.300690 162.003235,282.265808 z"
        />
      </svg>
    </motion.div>
  );
};