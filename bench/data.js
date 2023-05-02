window.BENCHMARK_DATA = {
  "lastUpdate": 1683042136969,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "bmil@google.com",
            "name": "Brenton Milne",
            "username": "sudonhim"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "ef3cc2242cce1854bfb923f4678f5a4bb3774504",
          "message": "test(bigquery): unit test float to int truncation",
          "timestamp": "2023-05-02T08:37:14-07:00",
          "tree_id": "0b63b821db18ad46b75c3fd9b3865b09934ecaaa",
          "url": "https://github.com/ibis-project/ibis/commit/ef3cc2242cce1854bfb923f4678f5a4bb3774504"
        },
        "date": 1683042049044,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.9314660175707212,
            "unit": "iter/sec",
            "range": "stddev: 0.006029961005781756",
            "extra": "mean: 1.0735764710000013 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 66.87451411562694,
            "unit": "iter/sec",
            "range": "stddev: 0.0005667460229003284",
            "extra": "mean: 14.953379672725347 msec\nrounds: 55"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.3382951246046961,
            "unit": "iter/sec",
            "range": "stddev: 0.0002869085098290657",
            "extra": "mean: 747.2193402000016 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 106.23015920444104,
            "unit": "iter/sec",
            "range": "stddev: 0.00012444883351913873",
            "extra": "mean: 9.413522557897043 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1818415008151757,
            "unit": "iter/sec",
            "range": "stddev: 0.06358126135271086",
            "extra": "mean: 5.499294690800002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 539.1644713755985,
            "unit": "iter/sec",
            "range": "stddev: 0.00003217154239724253",
            "extra": "mean: 1.8547216166685605 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 192.35421652352343,
            "unit": "iter/sec",
            "range": "stddev: 0.00006711709776467616",
            "extra": "mean: 5.198742289476705 msec\nrounds: 114"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 6357658.081033085,
            "unit": "iter/sec",
            "range": "stddev: 4.518863245374911e-9",
            "extra": "mean: 157.29062293917585 nsec\nrounds: 48544"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 4639290.432704523,
            "unit": "iter/sec",
            "range": "stddev: 1.1695136901870032e-8",
            "extra": "mean: 215.55020417562767 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 750.99048513744,
            "unit": "iter/sec",
            "range": "stddev: 0.00011313859816470904",
            "extra": "mean: 1.3315747932771589 msec\nrounds: 595"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 243.22046826550778,
            "unit": "iter/sec",
            "range": "stddev: 0.004240479807079367",
            "extra": "mean: 4.111496072396201 msec\nrounds: 221"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 2358.854060440294,
            "unit": "iter/sec",
            "range": "stddev: 0.00007818090631026463",
            "extra": "mean: 423.9346625002075 usec\nrounds: 560"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.952070752334,
            "unit": "iter/sec",
            "range": "stddev: 0.00008751117044411134",
            "extra": "mean: 6.136773809520164 msec\nrounds: 147"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 270.16685488821435,
            "unit": "iter/sec",
            "range": "stddev: 0.00026886672834561113",
            "extra": "mean: 3.701416298508436 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1181.6447060053947,
            "unit": "iter/sec",
            "range": "stddev: 0.00003226840784011938",
            "extra": "mean: 846.2780689641871 usec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 404.18647406143276,
            "unit": "iter/sec",
            "range": "stddev: 0.00003682549081345534",
            "extra": "mean: 2.4741055531908 msec\nrounds: 141"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 11720.56890815831,
            "unit": "iter/sec",
            "range": "stddev: 0.000013206809269808877",
            "extra": "mean: 85.3200905037922 usec\nrounds: 4939"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 104.26391892570848,
            "unit": "iter/sec",
            "range": "stddev: 0.0006512735428128004",
            "extra": "mean: 9.59104559183636 msec\nrounds: 49"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 153.9336212982106,
            "unit": "iter/sec",
            "range": "stddev: 0.00012649627610125186",
            "extra": "mean: 6.496306599990476 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 276.07717155525285,
            "unit": "iter/sec",
            "range": "stddev: 0.0002913673851206628",
            "extra": "mean: 3.622175619833401 msec\nrounds: 242"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 267.91690880777156,
            "unit": "iter/sec",
            "range": "stddev: 0.0003151778546897092",
            "extra": "mean: 3.732500514618481 msec\nrounds: 171"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5700293.577957199,
            "unit": "iter/sec",
            "range": "stddev: 9.122975575349227e-9",
            "extra": "mean: 175.4295610086569 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1742.6211414851955,
            "unit": "iter/sec",
            "range": "stddev: 0.00005244763486045248",
            "extra": "mean: 573.848196945277 usec\nrounds: 1244"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 115.50991117248681,
            "unit": "iter/sec",
            "range": "stddev: 0.000105495561960015",
            "extra": "mean: 8.657265769226814 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6354614.350421051,
            "unit": "iter/sec",
            "range": "stddev: 2.390938072849663e-7",
            "extra": "mean: 157.36596193842104 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 99.83900571475195,
            "unit": "iter/sec",
            "range": "stddev: 0.0007950501752320728",
            "extra": "mean: 10.016125389480342 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2544371.7247545975,
            "unit": "iter/sec",
            "range": "stddev: 1.7444170275693735e-8",
            "extra": "mean: 393.0243329897996 nsec\nrounds: 95239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 250.1668570590546,
            "unit": "iter/sec",
            "range": "stddev: 0.0004462991296183536",
            "extra": "mean: 3.99733206770847 msec\nrounds: 192"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9860.68696705195,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022802329414383613",
            "extra": "mean: 101.4128126510206 usec\nrounds: 5391"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1631314.4846470547,
            "unit": "iter/sec",
            "range": "stddev: 8.390086310625998e-8",
            "extra": "mean: 613.0025874295823 nsec\nrounds: 144928"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 37.44414239772038,
            "unit": "iter/sec",
            "range": "stddev: 0.023346774345708924",
            "extra": "mean: 26.7064468823535 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 7348912.845481369,
            "unit": "iter/sec",
            "range": "stddev: 4.341587487743727e-9",
            "extra": "mean: 136.07454885186849 nsec\nrounds: 71429"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 124.47689506340497,
            "unit": "iter/sec",
            "range": "stddev: 0.0001029675734511355",
            "extra": "mean: 8.033619407767432 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 100.42130344031811,
            "unit": "iter/sec",
            "range": "stddev: 0.0007601660148049458",
            "extra": "mean: 9.958046407895063 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 99.90468938016306,
            "unit": "iter/sec",
            "range": "stddev: 0.0008218929091989929",
            "extra": "mean: 10.009540154764332 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 88.29179744021891,
            "unit": "iter/sec",
            "range": "stddev: 0.015587976646070867",
            "extra": "mean: 11.326080439998805 msec\nrounds: 100"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 100.14423754305639,
            "unit": "iter/sec",
            "range": "stddev: 0.0007177047629396194",
            "extra": "mean: 9.985597020198554 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 2239.789444354787,
            "unit": "iter/sec",
            "range": "stddev: 0.00008365200773801313",
            "extra": "mean: 446.47053879123376 usec\nrounds: 1637"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 2250.896438179928,
            "unit": "iter/sec",
            "range": "stddev: 0.00008853213333024028",
            "extra": "mean: 444.26744075733615 usec\nrounds: 211"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 141272.2731701016,
            "unit": "iter/sec",
            "range": "stddev: 3.0421606618363063e-7",
            "extra": "mean: 7.078529831511458 usec\nrounds: 39371"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 1081576.976706114,
            "unit": "iter/sec",
            "range": "stddev: 2.1083903203663763e-7",
            "extra": "mean: 924.5758938447891 nsec\nrounds: 86957"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 270.9451633838503,
            "unit": "iter/sec",
            "range": "stddev: 0.0002758306305294251",
            "extra": "mean: 3.69078372727138 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 37.496807375495905,
            "unit": "iter/sec",
            "range": "stddev: 0.025218305866991052",
            "extra": "mean: 26.668937170728253 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 110.07480234010634,
            "unit": "iter/sec",
            "range": "stddev: 0.00013010809212674263",
            "extra": "mean: 9.084731280372644 msec\nrounds: 107"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 2317.0277976636785,
            "unit": "iter/sec",
            "range": "stddev: 0.0000793450195816259",
            "extra": "mean: 431.5873987391636 usec\nrounds: 1269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 2324.294523585072,
            "unit": "iter/sec",
            "range": "stddev: 0.00008004422221565315",
            "extra": "mean: 430.2380743287066 usec\nrounds: 1601"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 2358.502379022387,
            "unit": "iter/sec",
            "range": "stddev: 0.00007510442412812386",
            "extra": "mean: 423.9978763195083 usec\nrounds: 1326"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 55.936403113918516,
            "unit": "iter/sec",
            "range": "stddev: 0.00016989578545619486",
            "extra": "mean: 17.877445533339497 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 59.059221083927966,
            "unit": "iter/sec",
            "range": "stddev: 0.00025092767309753183",
            "extra": "mean: 16.93215693750716 msec\nrounds: 48"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 101.68374445670668,
            "unit": "iter/sec",
            "range": "stddev: 0.0006940028211489992",
            "extra": "mean: 9.834413606058384 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 103.20018755142061,
            "unit": "iter/sec",
            "range": "stddev: 0.0007040134074927191",
            "extra": "mean: 9.689904870586977 msec\nrounds: 85"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 25.984388458152022,
            "unit": "iter/sec",
            "range": "stddev: 0.027197026490909434",
            "extra": "mean: 38.48464633333606 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 4754.060620098499,
            "unit": "iter/sec",
            "range": "stddev: 0.00002005319173625118",
            "extra": "mean: 210.34649742839858 usec\nrounds: 2139"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 50.03840046928376,
            "unit": "iter/sec",
            "range": "stddev: 0.00023845512156621352",
            "extra": "mean: 19.984651600001747 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 100.23650968109735,
            "unit": "iter/sec",
            "range": "stddev: 0.0007578326576577602",
            "extra": "mean: 9.976404836735657 msec\nrounds: 98"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.473076450114349,
            "unit": "iter/sec",
            "range": "stddev: 0.004751175097261834",
            "extra": "mean: 404.3546652000032 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 98.4376284554024,
            "unit": "iter/sec",
            "range": "stddev: 0.0007264640525343273",
            "extra": "mean: 10.158716902175822 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.7892250731202282,
            "unit": "iter/sec",
            "range": "stddev: 0.0027376353317570437",
            "extra": "mean: 1.267065674999992 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8111.334515862219,
            "unit": "iter/sec",
            "range": "stddev: 0.000011934850810335517",
            "extra": "mean: 123.28427560772371 usec\nrounds: 3788"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 133.55981531256657,
            "unit": "iter/sec",
            "range": "stddev: 0.00003018756011378367",
            "extra": "mean: 7.487281991665876 msec\nrounds: 120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 277.358192277364,
            "unit": "iter/sec",
            "range": "stddev: 0.00026371541450399366",
            "extra": "mean: 3.6054460543930107 msec\nrounds: 239"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.6613030743786132,
            "unit": "iter/sec",
            "range": "stddev: 0.0012925132653589012",
            "extra": "mean: 601.9371272000058 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1864993.0759529246,
            "unit": "iter/sec",
            "range": "stddev: 1.0395165996231414e-7",
            "extra": "mean: 536.1950201820705 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11809378.027099023,
            "unit": "iter/sec",
            "range": "stddev: 3.635225706254822e-9",
            "extra": "mean: 84.67846466636692 nsec\nrounds: 112360"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 278.66022450141526,
            "unit": "iter/sec",
            "range": "stddev: 0.0003275652145900004",
            "extra": "mean: 3.5885997070059825 msec\nrounds: 157"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 271.93045710074955,
            "unit": "iter/sec",
            "range": "stddev: 0.00026715986542642887",
            "extra": "mean: 3.6774108007677215 msec\nrounds: 261"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 26.216018445245204,
            "unit": "iter/sec",
            "range": "stddev: 0.0003496706429876288",
            "extra": "mean: 38.144617653843994 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 104.2403458125975,
            "unit": "iter/sec",
            "range": "stddev: 0.00006376608465924713",
            "extra": "mean: 9.593214529408723 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 18.875243511750863,
            "unit": "iter/sec",
            "range": "stddev: 0.000085720632716752",
            "extra": "mean: 52.97944894737096 msec\nrounds: 19"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 8.470088990312469,
            "unit": "iter/sec",
            "range": "stddev: 0.00019462015010033586",
            "extra": "mean: 118.06251399999861 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 94.27961635335905,
            "unit": "iter/sec",
            "range": "stddev: 0.0008410402704551397",
            "extra": "mean: 10.606746597822482 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 99.2682965447264,
            "unit": "iter/sec",
            "range": "stddev: 0.00006433091861683156",
            "extra": "mean: 10.07370968181608 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 683.8448843532449,
            "unit": "iter/sec",
            "range": "stddev: 0.000047147817676308337",
            "extra": "mean: 1.4623199250013588 msec\nrounds: 560"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 196.36767624007297,
            "unit": "iter/sec",
            "range": "stddev: 0.000029384297956666937",
            "extra": "mean: 5.092487822575399 msec\nrounds: 124"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 82.99804281684038,
            "unit": "iter/sec",
            "range": "stddev: 0.01746192910047667",
            "extra": "mean: 12.04847688043433 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13354.489774801192,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023870320544942486",
            "extra": "mean: 74.8811835467437 usec\nrounds: 7257"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.9248363725987766,
            "unit": "iter/sec",
            "range": "stddev: 0.007471272347375663",
            "extra": "mean: 1.0812723522000056 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 100.56457275549043,
            "unit": "iter/sec",
            "range": "stddev: 0.0007480350111111179",
            "extra": "mean: 9.943859677417104 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 44.02688427722148,
            "unit": "iter/sec",
            "range": "stddev: 0.0006810127441382136",
            "extra": "mean: 22.71339470000555 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 97.92567720826068,
            "unit": "iter/sec",
            "range": "stddev: 0.0008075274444234405",
            "extra": "mean: 10.211826239131113 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 94.13128846269902,
            "unit": "iter/sec",
            "range": "stddev: 0.0008597104231033111",
            "extra": "mean: 10.623460236563803 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 2556017.6774578146,
            "unit": "iter/sec",
            "range": "stddev: 1.570774440002917e-8",
            "extra": "mean: 391.23360093267615 nsec\nrounds: 125001"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 169.70736132578722,
            "unit": "iter/sec",
            "range": "stddev: 0.0002887068823049229",
            "extra": "mean: 5.892496307689918 msec\nrounds: 130"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 2277.597793936263,
            "unit": "iter/sec",
            "range": "stddev: 0.00008681473593262113",
            "extra": "mean: 439.059083505586 usec\nrounds: 1449"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 417.2736522808675,
            "unit": "iter/sec",
            "range": "stddev: 0.00005328517379061919",
            "extra": "mean: 2.3965088486509534 msec\nrounds: 370"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 94.13653609007706,
            "unit": "iter/sec",
            "range": "stddev: 0.00083397073513275",
            "extra": "mean: 10.622868033333233 msec\nrounds: 90"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 175.02453935759928,
            "unit": "iter/sec",
            "range": "stddev: 0.004030019462902351",
            "extra": "mean: 5.713484541483992 msec\nrounds: 229"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 2299.723270652684,
            "unit": "iter/sec",
            "range": "stddev: 0.00007880741495162354",
            "extra": "mean: 434.8349267762944 usec\nrounds: 1352"
          }
        ]
      }
    ]
  }
}