import React, { useMemo } from "react";
import { Col, Row } from "react-bootstrap";
import { Table } from "../table/Table";
import { useResource } from "./useResource";

export const ResourceList = ({ type, title, properties }) => {
  const { items } = useResource(type);

  const tableModel = useMemo(() => {
    return {
      columns: properties,
      rows: items
    };
  }, [properties, items]);

  return (
    <>
      <Row>
        <Col>
          <h2>{title}</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Table tableModel={tableModel}></Table>
        </Col>
      </Row>
    </>
  );
};
