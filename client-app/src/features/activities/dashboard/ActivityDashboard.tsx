import React from "react"
import { Grid } from "semantic-ui-react"
import { Activity } from "../../../app/Models/activity"
import ActivityDetails from "../details/ActivityDetails"
import ActivityForm from "../form/ActivityForm"
import ActivityList from "./ActivityList"

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    editMode: boolean;
    openForm: (id?: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityDashboard({activities, selectActivity, selectedActivity, 
    cancelSelectActivity, editMode, openForm, closeForm, createOrEdit, deleteActivity}: Props) {

    const viewForm = () => {
        if(editMode) {
            return (
                <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit}/>
            )
        }
    }
    return (
        <Grid>
            <Grid.Column width='10'>
               <ActivityList activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity}/>
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && 
                <ActivityDetails 
                    activity={selectedActivity} 
                    cancelSelectActivity={cancelSelectActivity}
                    openForm={openForm}
                />}
                {viewForm()}
            </Grid.Column>
        </Grid>
    )
}