package com.codeclan.example.hotelBooking.repositories;

import com.codeclan.example.hotelBooking.models.Booking;
import com.codeclan.example.hotelBooking.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {

    List<Booking> findAllByToDateGreaterThan(Date date);

    List<Booking> findAllByFromDate(Date date);

    List<Booking> findByFromDateBefore(Date date);

    List<Booking> findAllByCustomer(Customer customer);
}
