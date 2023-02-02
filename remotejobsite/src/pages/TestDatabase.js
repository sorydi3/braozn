import React from "react";
import PropTypes from "prop-types";
import { Button, FormHelperText } from "@chakra-ui/react";
import { useEffect } from "react";
import { PrismaClient } from "@prisma/client";

// fetch users from the database
function TestDatabase(props) {
  // fetch users from the database
  const handler = async () => {
    const res = await fetch("/api/users");
    const data = await res.json();
    console.log(data);
  };

  //add new user to the database
  const addUser = async () => {
    const res = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        name: "John Doe",
        email: "ibradiallo@hotmail.com",
      }),
    });

    useEffect(() => {
      handler();
    }, []);

    return (
      // fetch data using the handler function
      <div>
        <Button onClick={handler}>Test</Button>
      </div>
    );
  };
}

async function getStaticsProps() {
  const prisma = new PrismaClient();
  const users = await prisma.usertest.findMany();
  console.log(users);
  return {
    props: {
      users,
    },
  };
}

TestDatabase.propTypes = {};

export default TestDatabase;
