import styled from 'styled-components';
const TasksWrapper = styled.div `

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
    gap: 3px;
    position: sticky;
    margin-left: 24px;
    height: 73vh;
 
    .timeCard{
        background: #FFFFFF;
        box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
        border-radius: 10px;
        width: 85px;
        min-height: 75px;
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
        height: 100%;
        width: 99.5%;
        ::-webkit-scrollbar{
            width: 16px;
            background: white;
            border-radius: 16px;
            position: absolute;
            top: 0;
            left: 0;
        }
       
        ::-webkit-scrollbar-track-piece {
            display: block;
            height: 16px;
            max-width: 16px;
        }
        ::-webkit-scrollbar-thumb {
            background: rgba(220, 223, 227, 1);
            border: 4px solid rgba(255, 255, 255, 1);
            border-radius: 30px;
        }
        
        ::-webkit-scrollbar-corner {
            display: none;
        }
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
        position: relative;
        
    }
    .taskCard{
        width: 512px;
        height: 85px;
        position:relative;
        box-shadow: 0px 2px 5.5px rgba(0, 0, 0, 0.02);
        margin-right: 16px;
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 1);
        border-left: none;
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
    .circle{
        position: absolute;
        left: -23px;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.7);
    }
    .stroke{
        position: absolute;
        left: -12px;
        width: 110%;
        height:2px;
        background: rgba(0, 0, 0, 0.7);
    }
`;
export default TasksWrapper;
