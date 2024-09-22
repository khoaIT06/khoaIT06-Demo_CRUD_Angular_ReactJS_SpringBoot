package com.example.demo.model;
import java.time.LocalDate;
import jakarta.persistence.*;

@Entity
@Table(name = "customer")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "name")
    private String name;
    @Column(name = "birthday")
    private LocalDate birthday;
    @Column(name = "phone")
    private String phone;
    @Column(name = "address")
    private String address;
    @Column(name = "identificationnumber")
    private String identificationnumber;

    // Constructors
    public Customer() {}

    public Customer(String name, LocalDate birthday, String phone, String address, String identificationnumber) {
        this.name = name;
        this.birthday = birthday;
        this.phone = phone;
        this.address = address;
        this.identificationnumber = identificationnumber;
    }

    // Getters and Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LocalDate getbirthday() {
        return birthday;
    }

    public void setbirthday(LocalDate birthday) {
        this.birthday = birthday;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getidentificationnumber() {
        return identificationnumber;
    }

    public void setidentificationnumber(String identificationnumber) {
        this.identificationnumber = identificationnumber;
    }
}
