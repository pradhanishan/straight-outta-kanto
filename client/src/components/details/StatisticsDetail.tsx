import { FC } from "react";
import Table from "react-bootstrap/Table";

interface IStatisticsDetailProps {
  name: string;
  stats: { base_stat: number; effort: number; stat: { name: string; url: string } }[];
}

const StatisticsDetail: FC<IStatisticsDetailProps> = (props: IStatisticsDetailProps) => {
  return (
    <Table striped bordered hover variant="dark" responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Base Stat</th>
          <th>Effort</th>
        </tr>
      </thead>
      <tbody>
        {props.stats.map((s) => {
          return (
            <tr key={`${props.name} ${s.stat.name}`}>
              <td>{s.stat.name}</td>
              <td>{s.base_stat}</td>
              <td>{s.effort}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default StatisticsDetail;
