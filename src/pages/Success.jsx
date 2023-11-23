/* eslint-disable react/no-unescaped-entities */
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Loyout from "../components/loyout/Loyout";

export default function Success() {
  return (
    <div>
      <Loyout>
        <div className="container">
          <div className="text mt-5">
            <h2> Buyurtmangiz qabul qilindi ✅</h2>
            <p>
              ❗️Tez orada operatorlarimiz siz bilan bog'lanadi, iltmos aloqada
              bo'ling
            </p>
            <br />
            <br />
          </div>
          <hr />
          <h3 className="title-buyurtma">Buyurtma</h3>
          <div className="table">
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                    <Td isNumeric>25.4</Td>
                  </Tr>
                  <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                    <Td isNumeric>30.48</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td isNumeric>0.91444</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </Loyout>
    </div>
  );
}
