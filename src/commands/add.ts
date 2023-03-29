import { CommandType, CommandObject, CommandUsage } from "wokcommands";

export default {
  description: "Adds numbers together",
  type: CommandType.BOTH,

  minArgs: 2,
  maxArgs: 2,
  expectedArgs: "<num1> <num2>",

  callback: (options: CommandUsage) => {
    const { args } = options
    console.log(args)
    console.log(options.user);

    const sum = args.reduce((acc, cur) => {
      return acc + Number(cur)
    }, 0)

    return `The sum is ${sum}`
  },
} as CommandObject;