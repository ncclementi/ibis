window.BENCHMARK_DATA = {
  "lastUpdate": 1678399080563,
  "repoUrl": "https://github.com/ibis-project/ibis",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "gil@forsyth.dev",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "committer": {
            "email": "417981+cpcloud@users.noreply.github.com",
            "name": "Phillip Cloud",
            "username": "cpcloud"
          },
          "distinct": true,
          "id": "51084adf66071dc04257aab067f4163620a6b1a5",
          "message": "docs(duckdb): fix broken docstring examples",
          "timestamp": "2023-03-09T16:52:56-05:00",
          "tree_id": "b9683e3bea888a83b6521c39bbeb94590b9445a1",
          "url": "https://github.com/ibis-project/ibis/commit/51084adf66071dc04257aab067f4163620a6b1a5"
        },
        "date": 1678399003233,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 164.15012927957932,
            "unit": "iter/sec",
            "range": "stddev: 0.00006828919268012115",
            "extra": "mean: 6.091984236557055 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.8183810171655957,
            "unit": "iter/sec",
            "range": "stddev: 0.0031436766576943905",
            "extra": "mean: 1.2219247258000052 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 545.7126528818669,
            "unit": "iter/sec",
            "range": "stddev: 0.00001813430131199935",
            "extra": "mean: 1.8324662159088234 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 4711.432268962047,
            "unit": "iter/sec",
            "range": "stddev: 0.00016956819018473858",
            "extra": "mean: 212.24968181921997 usec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 154.2730487327931,
            "unit": "iter/sec",
            "range": "stddev: 0.00013612453835897036",
            "extra": "mean: 6.482013600003711 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.1686839296391188,
            "unit": "iter/sec",
            "range": "stddev: 0.07241859774586731",
            "extra": "mean: 5.928247000999994 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 100.88328000423024,
            "unit": "iter/sec",
            "range": "stddev: 0.00019450996012373046",
            "extra": "mean: 9.91244535227312 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 114.27190350372402,
            "unit": "iter/sec",
            "range": "stddev: 0.0006409381645373458",
            "extra": "mean: 8.751057515790931 msec\nrounds: 95"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 46.80430083596659,
            "unit": "iter/sec",
            "range": "stddev: 0.00026136877479108686",
            "extra": "mean: 21.365557911113026 msec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 6953014.532658138,
            "unit": "iter/sec",
            "range": "stddev: 4.382164618613091e-9",
            "extra": "mean: 143.8225096903123 nsec\nrounds: 58824"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 95.30125144228126,
            "unit": "iter/sec",
            "range": "stddev: 0.00012520921225508296",
            "extra": "mean: 10.49304164285445 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 5590402.876179136,
            "unit": "iter/sec",
            "range": "stddev: 8.602454182928308e-9",
            "extra": "mean: 178.87798467289412 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 113.48818118781834,
            "unit": "iter/sec",
            "range": "stddev: 0.0005714273358260969",
            "extra": "mean: 8.811490232141798 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 777870.5219948788,
            "unit": "iter/sec",
            "range": "stddev: 1.8839684974665258e-7",
            "extra": "mean: 1.2855609921243214 usec\nrounds: 25446"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.7131605429421946,
            "unit": "iter/sec",
            "range": "stddev: 0.0013397636855703337",
            "extra": "mean: 583.7164556000062 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3547.8153966428595,
            "unit": "iter/sec",
            "range": "stddev: 0.003437972684697455",
            "extra": "mean: 281.8635944097474 usec\nrounds: 1467"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1772.6439446263748,
            "unit": "iter/sec",
            "range": "stddev: 0.000006867965658085139",
            "extra": "mean: 564.1290813259021 usec\nrounds: 1328"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 12196.552597487267,
            "unit": "iter/sec",
            "range": "stddev: 0.00001130063371962817",
            "extra": "mean: 81.990381462875 usec\nrounds: 4197"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 301.99421767662506,
            "unit": "iter/sec",
            "range": "stddev: 0.00019479634992252944",
            "extra": "mean: 3.3113216792475093 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 5720.374421178465,
            "unit": "iter/sec",
            "range": "stddev: 0.00005059422357298359",
            "extra": "mean: 174.81373182456613 usec\nrounds: 619"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1839335.1606545474,
            "unit": "iter/sec",
            "range": "stddev: 9.902754270450231e-8",
            "extra": "mean: 543.6747045297276 nsec\nrounds: 123457"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 290.65676601959467,
            "unit": "iter/sec",
            "range": "stddev: 0.00015208975352739123",
            "extra": "mean: 3.4404841617641364 msec\nrounds: 272"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 5235.4254626137945,
            "unit": "iter/sec",
            "range": "stddev: 0.0000500044925658921",
            "extra": "mean: 191.00644391578223 usec\nrounds: 2523"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 1171.5840451705274,
            "unit": "iter/sec",
            "range": "stddev: 0.000023705592297025222",
            "extra": "mean: 853.5452527901634 usec\nrounds: 269"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 474887.93052265444,
            "unit": "iter/sec",
            "range": "stddev: 9.010492193650938e-8",
            "extra": "mean: 2.1057599819380863 usec\nrounds: 2179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.8818792232035203,
            "unit": "iter/sec",
            "range": "stddev: 0.004107171799090676",
            "extra": "mean: 1.133942124600003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 119.6131309624825,
            "unit": "iter/sec",
            "range": "stddev: 0.0006659638788693677",
            "extra": "mean: 8.360286132077398 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.6847627969612629,
            "unit": "iter/sec",
            "range": "stddev: 0.004644944095112356",
            "extra": "mean: 1.4603597106000052 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 119.85620500733185,
            "unit": "iter/sec",
            "range": "stddev: 0.0006373712251112396",
            "extra": "mean: 8.343331076925287 msec\nrounds: 117"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 30.97989188042645,
            "unit": "iter/sec",
            "range": "stddev: 0.030087632878986966",
            "extra": "mean: 32.27900225926272 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 92.89049452570625,
            "unit": "iter/sec",
            "range": "stddev: 0.0007472544257901798",
            "extra": "mean: 10.765364153845288 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 314.0004452072637,
            "unit": "iter/sec",
            "range": "stddev: 0.00021163132355180893",
            "extra": "mean: 3.1847088603327474 msec\nrounds: 179"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 301.71312814088776,
            "unit": "iter/sec",
            "range": "stddev: 0.0002952410884385318",
            "extra": "mean: 3.3144066556263363 msec\nrounds: 151"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 119.51122936146494,
            "unit": "iter/sec",
            "range": "stddev: 0.0006553711977604779",
            "extra": "mean: 8.36741455462292 msec\nrounds: 119"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 29.86007270451992,
            "unit": "iter/sec",
            "range": "stddev: 0.0328783442466706",
            "extra": "mean: 33.4895366764673 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1884834.059778594,
            "unit": "iter/sec",
            "range": "stddev: 8.152182216466231e-8",
            "extra": "mean: 530.5506841899213 nsec\nrounds: 185186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 5257.916519689869,
            "unit": "iter/sec",
            "range": "stddev: 0.00007957059636129406",
            "extra": "mean: 190.18940225756637 usec\nrounds: 1949"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 145422.75889780186,
            "unit": "iter/sec",
            "range": "stddev: 3.0291496831422596e-7",
            "extra": "mean: 6.876502739868701 usec\nrounds: 34129"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 64.83980087285143,
            "unit": "iter/sec",
            "range": "stddev: 0.0001492942292500788",
            "extra": "mean: 15.422626018870181 msec\nrounds: 53"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 13788.315663160998,
            "unit": "iter/sec",
            "range": "stddev: 0.00001859017320301973",
            "extra": "mean: 72.52517453395377 usec\nrounds: 5953"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 2726908.648292638,
            "unit": "iter/sec",
            "range": "stddev: 1.3502038811904361e-8",
            "extra": "mean: 366.71562159785935 nsec\nrounds: 125000"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 72194.39768890278,
            "unit": "iter/sec",
            "range": "stddev: 4.178178468986822e-7",
            "extra": "mean: 13.851490309665857 usec\nrounds: 13106"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 8304.206643013404,
            "unit": "iter/sec",
            "range": "stddev: 0.00003911023383578735",
            "extra": "mean: 120.42089545559807 usec\nrounds: 3367"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 5471.053481153158,
            "unit": "iter/sec",
            "range": "stddev: 0.00004710292763090184",
            "extra": "mean: 182.7801543971063 usec\nrounds: 2092"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1887872.8590995625,
            "unit": "iter/sec",
            "range": "stddev: 9.124876485896529e-8",
            "extra": "mean: 529.6966875602835 nsec\nrounds: 188680"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 199.87233391633345,
            "unit": "iter/sec",
            "range": "stddev: 0.000020179337747529188",
            "extra": "mean: 5.003193690721599 msec\nrounds: 97"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 111.47492351570052,
            "unit": "iter/sec",
            "range": "stddev: 0.00005755655476495388",
            "extra": "mean: 8.970627370371387 msec\nrounds: 108"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 76.39858520899821,
            "unit": "iter/sec",
            "range": "stddev: 0.00006804016139389581",
            "extra": "mean: 13.089247624996858 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 5448.009462946727,
            "unit": "iter/sec",
            "range": "stddev: 0.00004677637353736243",
            "extra": "mean: 183.55327882619326 usec\nrounds: 1908"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 103.82573970903461,
            "unit": "iter/sec",
            "range": "stddev: 0.0003203051452454241",
            "extra": "mean: 9.631523000004043 msec\nrounds: 7"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 299.56974246358226,
            "unit": "iter/sec",
            "range": "stddev: 0.00023208835349907407",
            "extra": "mean: 3.3381208388279293 msec\nrounds: 273"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 678.6219038023369,
            "unit": "iter/sec",
            "range": "stddev: 0.00004013125435623901",
            "extra": "mean: 1.4735745993416556 msec\nrounds: 609"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 98.63190791232384,
            "unit": "iter/sec",
            "range": "stddev: 0.0008401687815130026",
            "extra": "mean: 10.138706846154927 msec\nrounds: 91"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 5.597089018928318,
            "unit": "iter/sec",
            "range": "stddev: 0.0001956010428197745",
            "extra": "mean: 178.6643014999735 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 119.35904198607466,
            "unit": "iter/sec",
            "range": "stddev: 0.0006273394226136332",
            "extra": "mean: 8.378083330433128 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.880035547916539,
            "unit": "iter/sec",
            "range": "stddev: 0.0030908704920414856",
            "extra": "mean: 1.1363177344000177 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 15.352594817135095,
            "unit": "iter/sec",
            "range": "stddev: 0.0005018049896484976",
            "extra": "mean: 65.13556906249462 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 162.8549730547607,
            "unit": "iter/sec",
            "range": "stddev: 0.00006989434063582008",
            "extra": "mean: 6.140432688314317 msec\nrounds: 154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 714.9960361666143,
            "unit": "iter/sec",
            "range": "stddev: 0.00005273959777676506",
            "extra": "mean: 1.3986091522428685 msec\nrounds: 624"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.5043367373891146,
            "unit": "iter/sec",
            "range": "stddev: 0.002211838771570373",
            "extra": "mean: 399.30732359999865 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 5610.248563726352,
            "unit": "iter/sec",
            "range": "stddev: 0.00005039885441189673",
            "extra": "mean: 178.2452218722722 usec\nrounds: 2222"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 119.42917665467365,
            "unit": "iter/sec",
            "range": "stddev: 0.00012923755891765034",
            "extra": "mean: 8.373163309092165 msec\nrounds: 110"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 105.40970690422012,
            "unit": "iter/sec",
            "range": "stddev: 0.0007981072148051184",
            "extra": "mean: 9.486792339804568 msec\nrounds: 103"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 107.69298742838288,
            "unit": "iter/sec",
            "range": "stddev: 0.0006589368272838499",
            "extra": "mean: 9.285655676187941 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 6115986.7309822645,
            "unit": "iter/sec",
            "range": "stddev: 9.981262133915146e-9",
            "extra": "mean: 163.50591392436718 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 10.568500314469704,
            "unit": "iter/sec",
            "range": "stddev: 0.0002937677034823652",
            "extra": "mean: 94.62080430000697 msec\nrounds: 10"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 311.1308001062799,
            "unit": "iter/sec",
            "range": "stddev: 0.00019779677451388163",
            "extra": "mean: 3.2140823076931238 msec\nrounds: 299"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 289.058035367879,
            "unit": "iter/sec",
            "range": "stddev: 0.00003385505791079035",
            "extra": "mean: 3.4595128923758094 msec\nrounds: 223"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 105.7995507005231,
            "unit": "iter/sec",
            "range": "stddev: 0.0006766003091545477",
            "extra": "mean: 9.451835980198126 msec\nrounds: 101"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 217.90951579686802,
            "unit": "iter/sec",
            "range": "stddev: 0.00414416745127103",
            "extra": "mean: 4.589060722488985 msec\nrounds: 209"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 107.20330592839376,
            "unit": "iter/sec",
            "range": "stddev: 0.0007245995678265576",
            "extra": "mean: 9.328070541667325 msec\nrounds: 96"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 157.54749515550003,
            "unit": "iter/sec",
            "range": "stddev: 0.004117289652317801",
            "extra": "mean: 6.347292281689378 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 88.78034702311685,
            "unit": "iter/sec",
            "range": "stddev: 0.0002526343876144179",
            "extra": "mean: 11.26375412499365 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 310.2616916640446,
            "unit": "iter/sec",
            "range": "stddev: 0.00023064944505546547",
            "extra": "mean: 3.2230856301873487 msec\nrounds: 265"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 337.0980613096942,
            "unit": "iter/sec",
            "range": "stddev: 0.00001333191953179169",
            "extra": "mean: 2.9664958502425014 msec\nrounds: 207"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 102.65503027923981,
            "unit": "iter/sec",
            "range": "stddev: 0.0007182695124922921",
            "extra": "mean: 9.741363840425779 msec\nrounds: 94"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 42.17391244466582,
            "unit": "iter/sec",
            "range": "stddev: 0.0007806685218711227",
            "extra": "mean: 23.711340542854487 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 5578.443902813498,
            "unit": "iter/sec",
            "range": "stddev: 0.0000693618039915418",
            "extra": "mean: 179.26146026056622 usec\nrounds: 2466"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 308.3379300826513,
            "unit": "iter/sec",
            "range": "stddev: 0.00020174638319265154",
            "extra": "mean: 3.243194892473805 msec\nrounds: 279"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 12692.8442955313,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015524974368844373",
            "extra": "mean: 78.78454794817458 usec\nrounds: 4922"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 57.31404781404599,
            "unit": "iter/sec",
            "range": "stddev: 0.0014074874092687237",
            "extra": "mean: 17.447729450979896 msec\nrounds: 51"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 118.37924492889225,
            "unit": "iter/sec",
            "range": "stddev: 0.0007228700603086204",
            "extra": "mean: 8.447426747827945 msec\nrounds: 115"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 53.69046847029991,
            "unit": "iter/sec",
            "range": "stddev: 0.0004209504259363218",
            "extra": "mean: 18.625279839999394 msec\nrounds: 50"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 24.86098888564895,
            "unit": "iter/sec",
            "range": "stddev: 0.0008528882423425385",
            "extra": "mean: 40.22366144000216 msec\nrounds: 25"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 11772860.272267437,
            "unit": "iter/sec",
            "range": "stddev: 3.6305405242452592e-9",
            "extra": "mean: 84.94112534022496 nsec\nrounds: 114943"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 134.41440371843268,
            "unit": "iter/sec",
            "range": "stddev: 0.0001431603325909619",
            "extra": "mean: 7.439678876192245 msec\nrounds: 105"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 281.7698141726711,
            "unit": "iter/sec",
            "range": "stddev: 0.00029416356589404637",
            "extra": "mean: 3.5489962008037916 msec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 120.01350485528206,
            "unit": "iter/sec",
            "range": "stddev: 0.0006700214703435456",
            "extra": "mean: 8.332395601693719 msec\nrounds: 118"
          }
        ]
      }
    ]
  }
}