import styled from 'styled-components';

const TasksWrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
    gap: 3px;
    position: sticky;
    margin-left: 24px;

    .timeCard{
        background: #FFFFFF;
        box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
        border-radius: 10px;
        width: 85px;
        height: 75px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 14px;
    }
    .cardsList{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        overflow: auto;
        height: 700px;
        width: 99.5%;
       
    }
    .tasksSameHour{ 
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        gap: 3px;
        position: sticky;
    }
    .taskTimeCard{
        background: #FFFFFF;
        box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
        border-radius: 10px;
        width: 85px;
        height: 85px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px;
      
        margin-right: 17px;
        margin-bottom: 14px;  
    }
    .tasksList{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        
    }
    .taskCard{
        width: 512px;
        height: 85px;
        position:relative;
        box-shadow: 0px 2px 5.5px rgba(0, 0, 0, 0.02);
        margin-right: 16px;
        border-radius: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 20px;
        background: linear-gradient(112.83deg, rgba(228, 240, 248, 0.42) 0%, rgba(255, 255, 255, 0.336) 110.84%);
        box-shadow: 0.1px 2px 15.5px 3px rgba(0, 0, 0, 0.1);
        
    }
  
    .deleteButton{
        color: #FFFFFF;
        font-weight: 800;
        font-size: 14px;
        background: #FF3D1F;
        border-radius: 4px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 57px;
        height: 25px;
        border-radius: 4px;  
        position: absolute;
        top: 6px;
        right: 7px;
        cursor: pointer;

    }
    .taskText{
        padding-left: 25px;
        max-width:80%;
        overflow:auto;
    }
`;

export default TasksWrapper;