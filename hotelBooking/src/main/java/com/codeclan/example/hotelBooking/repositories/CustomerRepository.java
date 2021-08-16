package com.codeclan.example.hotelBooking.repositories;

import com.codeclan.example.hotelBooking.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
