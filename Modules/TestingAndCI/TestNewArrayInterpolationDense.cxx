/*=========================================================================

  Program:   Visualization Toolkit
  Module:    ArrayInterpolationDense.cxx

-------------------------------------------------------------------------
  Copyright 2008 Sandia Corporation.
  Under the terms of Contract DE-AC04-94AL85000 with Sandia Corporation,
  the U.S. Government retains certain rights in this software.
-------------------------------------------------------------------------

  Copyright (c) Ken Martin, Will Schroeder, Bill Lorensen
  All rights reserved.
  See Copyright.txt or http://www.kitware.com/Copyright.htm for details.

     This software is distributed WITHOUT ANY WARRANTY; without even
     the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
     PURPOSE.  See the above copyright notice for more information.

=========================================================================*/

#include <vtkArrayInterpolate.h>
#include <vtkDenseArray.h>
#include <vtkSmartPointer.h>

#include <iostream>
#include <stdexcept>

void test_new_expression(const bool expression, const std::string& message)
{
  if(!expression)
    throw std::runtime_error(message);
}

int TestNewArrayInterpolationDense(int vtkNotUsed(argc), char *vtkNotUsed(argv)[])
{
  try
  {
    vtkSmartPointer<vtkDenseArray<double> > a = vtkSmartPointer<vtkDenseArray<double> >::New();
    a->Resize(5);
    a->SetValue(0, 0);
    a->SetValue(1, 1);
    a->SetValue(2, 2);
    a->SetValue(3, 3);
    a->SetValue(4, 4);

    vtkSmartPointer<vtkDenseArray<double> > b = vtkSmartPointer<vtkDenseArray<double> >::New();
    b->Resize(vtkArrayExtents(2));

    vtkInterpolate(a.GetPointer(), vtkArrayExtentsList(vtkArrayExtents(vtkArrayRange(0, 1)), vtkArrayExtents(vtkArrayRange(1, 2))), vtkArrayWeights(0.5, 0.5), vtkArrayExtents(vtkArrayRange(0, 1)), b.GetPointer());
    vtkInterpolate(a.GetPointer(), vtkArrayExtentsList(vtkArrayExtents(vtkArrayRange(2, 3)), vtkArrayExtents(vtkArrayRange(3, 4))), vtkArrayWeights(0.5, 0.5), vtkArrayExtents(vtkArrayRange(1, 2)), b.GetPointer());

    test_new_expression(b->GetValue(0) == 0.5, "Error: expected 0.5");
    test_new_expression(b->GetValue(1) == 2.5, "Error: expected 2.5");

    vtkSmartPointer<vtkDenseArray<double> > c = vtkSmartPointer<vtkDenseArray<double> >::New();
    c->Resize(5, 2);
    c->SetValue(0, 0, 0);
    c->SetValue(0, 1, 1);
    c->SetValue(1, 0, 2);
    c->SetValue(1, 1, 3);
    c->SetValue(2, 0, 4);
    c->SetValue(2, 1, 5);
    c->SetValue(3, 0, 6);
    c->SetValue(3, 1, 7);
    c->SetValue(4, 0, 8);
    c->SetValue(4, 1, 9);

    vtkSmartPointer<vtkDenseArray<double> > d = vtkSmartPointer<vtkDenseArray<double> >::New();
    d->Resize(vtkArrayExtents(2, 2));

    vtkInterpolate(c.GetPointer(), vtkArrayExtentsList(vtkArrayExtents(vtkArrayRange(0, 1), vtkArrayRange(0, 2)), vtkArrayExtents(vtkArrayRange(1, 2), vtkArrayRange(0, 2))), vtkArrayWeights(0.5, 0.5), vtkArrayExtents(vtkArrayRange(0, 1), vtkArrayRange(0, 2)), d.GetPointer());
    vtkInterpolate(c.GetPointer(), vtkArrayExtentsList(vtkArrayExtents(vtkArrayRange(2, 3), vtkArrayRange(0, 2)), vtkArrayExtents(vtkArrayRange(3, 4), vtkArrayRange(0, 2))), vtkArrayWeights(0.5, 0.5), vtkArrayExtents(vtkArrayRange(1, 2), vtkArrayRange(0, 2)), d.GetPointer());

    test_new_expression(d->GetValue(0, 0) == 1, "Error: expected 1");
    test_new_expression(d->GetValue(0, 1) == 4, "Error: expected 2");
    test_new_expression(d->GetValue(1, 0) == 5, "Error: expected 5");
    test_new_expression(d->GetValue(1, 1) == 6, "Error: expected 6");

    return 0;
  }
  catch(std::exception& e)
  {
    cerr << e.what() << endl;
    return 1;
  }
}
