/**
 * This is the stack
 *
 * By:      Yiyun Qin
 * Version: 1.0
 * Since:   2022-09-23
 */

class Vehicle {
  private licensePlate: string
  public color: string
  private doorNumber: number
  public speed: number = 0
  private maximumSpeed: number

  // constructor
  public constructor(
    colour: string,
    license: string,
    door: number,
    maxSpeed: number
  ) {
    this.licensePlate = license
    this.color = colour
    this.doorNumber = door
    this.maximumSpeed = maxSpeed
  }

  // getters
  private getLicense(): string {
    return this.licensePlate
  }

  public status(): void {
    console.log('Status:')
    console.log(` -> Speed: ${this.speed}`)
    console.log(` -> MaxSpeed: ${this.maximumSpeed}`)
    console.log(` -> Number of doors: ${this.doorNumber}`)
    console.log(` -> License Plate: ${this.licensePlate}`)
    console.log(` -> Color: ${this.color}`)
  }

  // setters

  // method
  public accelerate(accelerationPower: number, accelerationTime: number): void {
    this.speed = accelerationPower * accelerationTime + this.speed
  }

  public break(breakPower: number, breakTime: number): void {
    this.speed = this.speed - breakPower * breakTime
  }
}
export = Vehicle
