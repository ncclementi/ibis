window.BENCHMARK_DATA = {
  "lastUpdate": 1683656766447,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "89aecf2d42cb68bbecb27891318c1eea7dc7cc97",
          "message": "docs(oracle): add oracle to matrix",
          "timestamp": "2023-05-09T11:17:59-07:00",
          "tree_id": "550f5a4158d990ac7b45f823f9d97680ae221235",
          "url": "https://github.com/ibis-project/ibis/commit/89aecf2d42cb68bbecb27891318c1eea7dc7cc97"
        },
        "date": 1683656566370,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8537.67149276989,
            "unit": "iter/sec",
            "range": "stddev: 0.000026379662121411348",
            "extra": "mean: 117.1279547177293 usec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 81.39592132974698,
            "unit": "iter/sec",
            "range": "stddev: 0.0017031557025846222",
            "extra": "mean: 12.285627874999427 msec\nrounds: 64"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 87.12487611749712,
            "unit": "iter/sec",
            "range": "stddev: 0.0006704852305826305",
            "extra": "mean: 11.477778156624224 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 328.80158367665507,
            "unit": "iter/sec",
            "range": "stddev: 0.0003843235325177188",
            "extra": "mean: 3.041347881655596 msec\nrounds: 169"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 193.7577123037378,
            "unit": "iter/sec",
            "range": "stddev: 0.0009525711347710557",
            "extra": "mean: 5.161084883332971 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 149.1171187627094,
            "unit": "iter/sec",
            "range": "stddev: 0.000651593343611553",
            "extra": "mean: 6.70613815702343 msec\nrounds: 121"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 211.52885494196846,
            "unit": "iter/sec",
            "range": "stddev: 0.0005941825536210939",
            "extra": "mean: 4.727487416666361 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 28.46247158724727,
            "unit": "iter/sec",
            "range": "stddev: 0.002824405098748567",
            "extra": "mean: 35.13398325000188 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9578242.755909469,
            "unit": "iter/sec",
            "range": "stddev: 2.0931981506891096e-7",
            "extra": "mean: 104.40328413931367 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 148.9936423088381,
            "unit": "iter/sec",
            "range": "stddev: 0.0007214484497119162",
            "extra": "mean: 6.711695777778038 msec\nrounds: 135"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.032737419358583,
            "unit": "iter/sec",
            "range": "stddev: 0.0015086982516949678",
            "extra": "mean: 49.91829020000296 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 79.17314015482114,
            "unit": "iter/sec",
            "range": "stddev: 0.0009560297394511625",
            "extra": "mean: 12.630546142852543 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 87.17283598790075,
            "unit": "iter/sec",
            "range": "stddev: 0.001350932403372184",
            "extra": "mean: 11.471463428570754 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 83.2717913673304,
            "unit": "iter/sec",
            "range": "stddev: 0.001523523696768445",
            "extra": "mean: 12.008868592591908 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 114.73066548427994,
            "unit": "iter/sec",
            "range": "stddev: 0.013426437041562607",
            "extra": "mean: 8.716065541666515 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 78.81878290370146,
            "unit": "iter/sec",
            "range": "stddev: 0.001318961818915908",
            "extra": "mean: 12.687331155846081 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3166.045466609075,
            "unit": "iter/sec",
            "range": "stddev: 0.00012964941051933645",
            "extra": "mean: 315.85143376700415 usec\nrounds: 770"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1596.5728581242654,
            "unit": "iter/sec",
            "range": "stddev: 0.00022038392550701217",
            "extra": "mean: 626.3416009557187 usec\nrounds: 837"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 200.93395019576516,
            "unit": "iter/sec",
            "range": "stddev: 0.000653420490555474",
            "extra": "mean: 4.976759771187118 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1761237.4772603905,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011539448032944033",
            "extra": "mean: 567.7826033747036 nsec\nrounds: 138889"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.0668366226736417,
            "unit": "iter/sec",
            "range": "stddev: 0.03944132326326596",
            "extra": "mean: 937.3506483999961 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.48815627033218,
            "unit": "iter/sec",
            "range": "stddev: 0.0005722141654853684",
            "extra": "mean: 9.951421511902462 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.1804037511945,
            "unit": "iter/sec",
            "range": "stddev: 0.0035731738664662237",
            "extra": "mean: 65.87440073333445 msec\nrounds: 15"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1351150.8669427542,
            "unit": "iter/sec",
            "range": "stddev: 9.563272177338082e-7",
            "extra": "mean: 740.1098015521372 nsec\nrounds: 88496"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 73.78676018115134,
            "unit": "iter/sec",
            "range": "stddev: 0.0016001550938686418",
            "extra": "mean: 13.552566850000385 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1444.545813789119,
            "unit": "iter/sec",
            "range": "stddev: 0.0038397350566397067",
            "extra": "mean: 692.2591104098997 usec\nrounds: 1268"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 82.266230911818,
            "unit": "iter/sec",
            "range": "stddev: 0.0012921566439343048",
            "extra": "mean: 12.155655958906275 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 80.89892649920202,
            "unit": "iter/sec",
            "range": "stddev: 0.0013097942497526196",
            "extra": "mean: 12.361103456791406 msec\nrounds: 81"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1714.5937288729328,
            "unit": "iter/sec",
            "range": "stddev: 0.00019360523251442944",
            "extra": "mean: 583.2285416425369 usec\nrounds: 1717"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1670.1128824446735,
            "unit": "iter/sec",
            "range": "stddev: 0.00017327104558283882",
            "extra": "mean: 598.7619223295989 usec\nrounds: 206"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 266.19671150910557,
            "unit": "iter/sec",
            "range": "stddev: 0.00027862645677182644",
            "extra": "mean: 3.7566204117656574 msec\nrounds: 187"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 33.035833256224514,
            "unit": "iter/sec",
            "range": "stddev: 0.0026150222349925075",
            "extra": "mean: 30.27016125926181 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1677.0823759858838,
            "unit": "iter/sec",
            "range": "stddev: 0.00013952040496214725",
            "extra": "mean: 596.2736323027326 usec\nrounds: 873"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 570.1751060778664,
            "unit": "iter/sec",
            "range": "stddev: 0.00022078020138587825",
            "extra": "mean: 1.75384717666617 msec\nrounds: 300"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 84.32633275795217,
            "unit": "iter/sec",
            "range": "stddev: 0.001321021043551971",
            "extra": "mean: 11.858691909090492 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 46.62777375343433,
            "unit": "iter/sec",
            "range": "stddev: 0.0012711693886022196",
            "extra": "mean: 21.446445315788765 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 34.20930684983536,
            "unit": "iter/sec",
            "range": "stddev: 0.0006274094347797414",
            "extra": "mean: 29.231811225804268 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 150.3231941003653,
            "unit": "iter/sec",
            "range": "stddev: 0.003496127892731869",
            "extra": "mean: 6.652333367346736 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.72229601086889,
            "unit": "iter/sec",
            "range": "stddev: 0.0010081130113417614",
            "extra": "mean: 17.32432819047433 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5959241.281529897,
            "unit": "iter/sec",
            "range": "stddev: 1.0496301801892659e-7",
            "extra": "mean: 167.80659697391474 nsec\nrounds: 29941"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5883.576601774356,
            "unit": "iter/sec",
            "range": "stddev: 0.00011232263462448499",
            "extra": "mean: 169.96464356364834 usec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 981983.3028269,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016878615661776608",
            "extra": "mean: 1.0183472540940708 usec\nrounds: 153847"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 70.96949487110183,
            "unit": "iter/sec",
            "range": "stddev: 0.0014609296256056854",
            "extra": "mean: 14.09056104761979 msec\nrounds: 63"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-oracle]",
            "value": 1766.0033302250624,
            "unit": "iter/sec",
            "range": "stddev: 0.00013768311430890342",
            "extra": "mean: 566.2503478249718 usec\nrounds: 161"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1726065.3027132535,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011984007188001297",
            "extra": "mean: 579.352356152499 nsec\nrounds: 111112"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 84.31872392023848,
            "unit": "iter/sec",
            "range": "stddev: 0.0013601444134380561",
            "extra": "mean: 11.859762025643944 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 191.64829031901505,
            "unit": "iter/sec",
            "range": "stddev: 0.004253448307358162",
            "extra": "mean: 5.217891578032937 msec\nrounds: 173"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 199.0886008265724,
            "unit": "iter/sec",
            "range": "stddev: 0.000653080931188214",
            "extra": "mean: 5.0228892857161 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 66.5523045516894,
            "unit": "iter/sec",
            "range": "stddev: 0.027014965117247325",
            "extra": "mean: 15.025775692310196 msec\nrounds: 65"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 177.38700735624028,
            "unit": "iter/sec",
            "range": "stddev: 0.00042449278290186254",
            "extra": "mean: 5.637391457829458 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 88.61077393234636,
            "unit": "iter/sec",
            "range": "stddev: 0.0005135005409890043",
            "extra": "mean: 11.285309400000187 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 230.00773683074772,
            "unit": "iter/sec",
            "range": "stddev: 0.00070087634741025",
            "extra": "mean: 4.347679837986731 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1651.8849915363335,
            "unit": "iter/sec",
            "range": "stddev: 0.00016466566346400895",
            "extra": "mean: 605.3690209207309 usec\nrounds: 1434"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-oracle]",
            "value": 71.7870199791473,
            "unit": "iter/sec",
            "range": "stddev: 0.0016459434453773825",
            "extra": "mean: 13.930094887494704 msec\nrounds: 80"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 76.86577889853233,
            "unit": "iter/sec",
            "range": "stddev: 0.0016231634985259214",
            "extra": "mean: 13.009690584415505 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1370.404241897352,
            "unit": "iter/sec",
            "range": "stddev: 0.004862607208863983",
            "extra": "mean: 729.7116934018536 usec\nrounds: 1546"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-oracle]",
            "value": 169.27175564913827,
            "unit": "iter/sec",
            "range": "stddev: 0.0008296668736160581",
            "extra": "mean: 5.90766011828206 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 204.41567982867252,
            "unit": "iter/sec",
            "range": "stddev: 0.0006597337348073319",
            "extra": "mean: 4.891992634019722 msec\nrounds: 194"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 77.9489988163876,
            "unit": "iter/sec",
            "range": "stddev: 0.0017742414179422903",
            "extra": "mean: 12.82890114285554 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1028.9685462030404,
            "unit": "iter/sec",
            "range": "stddev: 0.0001345030643843443",
            "extra": "mean: 971.8470051296162 usec\nrounds: 195"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 134708.868155182,
            "unit": "iter/sec",
            "range": "stddev: 0.000005716368965167293",
            "extra": "mean: 7.423416243450427 usec\nrounds: 35842"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1668.7027196788986,
            "unit": "iter/sec",
            "range": "stddev: 0.00017160144813974267",
            "extra": "mean: 599.2679152536084 usec\nrounds: 826"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 23.909024475200518,
            "unit": "iter/sec",
            "range": "stddev: 0.003624891928409632",
            "extra": "mean: 41.82521127272439 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1537.2585843471281,
            "unit": "iter/sec",
            "range": "stddev: 0.00010515037112906344",
            "extra": "mean: 650.5086458337773 usec\nrounds: 336"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 206.38981745123132,
            "unit": "iter/sec",
            "range": "stddev: 0.0005437480505424743",
            "extra": "mean: 4.845200273682562 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4027566.09904852,
            "unit": "iter/sec",
            "range": "stddev: 6.344424549865544e-7",
            "extra": "mean: 248.2889108226957 nsec\nrounds: 166667"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5352965.099078424,
            "unit": "iter/sec",
            "range": "stddev: 2.026203481071619e-7",
            "extra": "mean: 186.81235193786654 nsec\nrounds: 64517"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 108.11371892987253,
            "unit": "iter/sec",
            "range": "stddev: 0.0008571891087849377",
            "extra": "mean: 9.249519948977477 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 81.14230797061975,
            "unit": "iter/sec",
            "range": "stddev: 0.0017132059377953524",
            "extra": "mean: 12.324027070589155 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 44.98850678616435,
            "unit": "iter/sec",
            "range": "stddev: 0.0022500505953737086",
            "extra": "mean: 22.227899333336783 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1823698.2223877732,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011184734551346218",
            "extra": "mean: 548.336335323449 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.320605876265056,
            "unit": "iter/sec",
            "range": "stddev: 0.0018544534064492732",
            "extra": "mean: 26.79484902564174 msec\nrounds: 39"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5193979117924219,
            "unit": "iter/sec",
            "range": "stddev: 0.02405881113675455",
            "extra": "mean: 1.9253061617999947 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.10170450725109645,
            "unit": "iter/sec",
            "range": "stddev: 0.1552694858467525",
            "extra": "mean: 9.832405928000004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.001361057588692,
            "unit": "iter/sec",
            "range": "stddev: 0.002115933501896254",
            "extra": "mean: 142.82937157141922 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 8443.975281894554,
            "unit": "iter/sec",
            "range": "stddev: 0.000027916838404215507",
            "extra": "mean: 118.42763231960012 usec\nrounds: 4047"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 89.12068685512278,
            "unit": "iter/sec",
            "range": "stddev: 0.0006649240839637626",
            "extra": "mean: 11.220739373627467 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4627165.202638727,
            "unit": "iter/sec",
            "range": "stddev: 2.6589663271838794e-7",
            "extra": "mean: 216.11504154414646 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.9615474664596495,
            "unit": "iter/sec",
            "range": "stddev: 0.005468351484935325",
            "extra": "mean: 509.8015812000085 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 393.7896784446089,
            "unit": "iter/sec",
            "range": "stddev: 0.00020922393211262003",
            "extra": "mean: 2.539426640001845 msec\nrounds: 375"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 85.95978292472556,
            "unit": "iter/sec",
            "range": "stddev: 0.0006119780810561358",
            "extra": "mean: 11.63334720000042 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 79.84235154644584,
            "unit": "iter/sec",
            "range": "stddev: 0.0017881874402974388",
            "extra": "mean: 12.524681207795847 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10179.210543726398,
            "unit": "iter/sec",
            "range": "stddev: 0.0000845419271535456",
            "extra": "mean: 98.23944555467665 usec\nrounds: 5400"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 136.90470962532916,
            "unit": "iter/sec",
            "range": "stddev: 0.0005959934325416209",
            "extra": "mean: 7.3043506153785875 msec\nrounds: 13"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4976583.323458248,
            "unit": "iter/sec",
            "range": "stddev: 2.588944049099226e-7",
            "extra": "mean: 200.9410744288039 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5150711440776414,
            "unit": "iter/sec",
            "range": "stddev: 0.020946470476254194",
            "extra": "mean: 1.941479369400008 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.0154333554858057,
            "unit": "iter/sec",
            "range": "stddev: 0.09280352118259566",
            "extra": "mean: 984.801212800005 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5230092302626062,
            "unit": "iter/sec",
            "range": "stddev: 0.018402277534040622",
            "extra": "mean: 1.9120121445999985 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 77.33432142822258,
            "unit": "iter/sec",
            "range": "stddev: 0.0014508782382359217",
            "extra": "mean: 12.930869263890088 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[oracle]",
            "value": 75.7035592198033,
            "unit": "iter/sec",
            "range": "stddev: 0.0013876756366628263",
            "extra": "mean: 13.209418557145066 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 184.15720892680895,
            "unit": "iter/sec",
            "range": "stddev: 0.0006740088165081358",
            "extra": "mean: 5.430143114285784 msec\nrounds: 175"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 577.9987116245303,
            "unit": "iter/sec",
            "range": "stddev: 0.00013636311777013958",
            "extra": "mean: 1.730107662678672 msec\nrounds: 418"
          }
        ]
      }
    ]
  }
}