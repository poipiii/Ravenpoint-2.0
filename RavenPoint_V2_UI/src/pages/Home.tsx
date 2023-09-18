import { DataTable } from "@/components/DataTable";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Upload from "@/components/Upload";
const Home = () => {
    const TableMetaData = {
        TableName: "Tables",
        "table_id": 1,
    }
    return ( 
        <div>
            <NavBar></NavBar>
            <div className="flex flex-row justify-end mx-20 mt-10">
                 <Dialog>
      <DialogTrigger asChild>
                <Button className="bg-white border-slate-700 border-2 text-zinc-700 hover:text-white  ">Add Table <Plus className="ml-2"/> </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[700px] ">
        <DialogHeader>
          <DialogTitle>Add Tables</DialogTitle>
          <DialogDescription>
            Upload your csv or excel files to create tables in ravenpoint
          </DialogDescription>
        </DialogHeader>
       <div>
        <Upload></Upload>

       </div>
        <DialogFooter>
          <Button type="submit">Create Tables</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

            </div>
            <DataTable TableMetaData={TableMetaData}></DataTable>
            
        </div>
     );
}
 
export default Home;