window.BENCHMARK_DATA = {
  "lastUpdate": 1679048172178,
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
          "id": "93d3059f33280f625326866d291d7d206fe2077e",
          "message": "docs: clean up agg argument descriptions and add join examples",
          "timestamp": "2023-03-17T06:09:04-04:00",
          "tree_id": "3ef1e98e6a879f95384774525205b0e7abbcb57e",
          "url": "https://github.com/ibis-project/ibis/commit/93d3059f33280f625326866d291d7d206fe2077e"
        },
        "date": 1679048075021,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 89.67013422705071,
            "unit": "iter/sec",
            "range": "stddev: 0.00045077389459820553",
            "extra": "mean: 11.151985090910356 msec\nrounds: 33"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 164.34905047605153,
            "unit": "iter/sec",
            "range": "stddev: 0.012713984641176826",
            "extra": "mean: 6.08461075438776 msec\nrounds: 57"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 20.686113139193306,
            "unit": "iter/sec",
            "range": "stddev: 0.1656469625989261",
            "extra": "mean: 48.34160933333254 msec\nrounds: 27"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1485715.7922316391,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016369466794323322",
            "extra": "mean: 673.0762405762254 nsec\nrounds: 53764"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 88.83029324051829,
            "unit": "iter/sec",
            "range": "stddev: 0.000970802638118161",
            "extra": "mean: 11.257420903614316 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 3969411.281166692,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012728833849790896",
            "extra": "mean: 251.92652742834366 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 107.30183170452814,
            "unit": "iter/sec",
            "range": "stddev: 0.00009848469379988419",
            "extra": "mean: 9.319505399997752 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 104.86065318612533,
            "unit": "iter/sec",
            "range": "stddev: 0.012528296531521056",
            "extra": "mean: 9.536465486487312 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 67.45627527928623,
            "unit": "iter/sec",
            "range": "stddev: 0.0013494975219925209",
            "extra": "mean: 14.824417681820472 msec\nrounds: 44"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 87.93170476389749,
            "unit": "iter/sec",
            "range": "stddev: 0.0012074649730881247",
            "extra": "mean: 11.372462329543898 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 5869.265898125738,
            "unit": "iter/sec",
            "range": "stddev: 0.000035030681759914136",
            "extra": "mean: 170.37905887333113 usec\nrounds: 3533"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 78.45651834515877,
            "unit": "iter/sec",
            "range": "stddev: 0.0012643826969661",
            "extra": "mean: 12.745913546668437 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 17.757599127316617,
            "unit": "iter/sec",
            "range": "stddev: 0.0011306324221612158",
            "extra": "mean: 56.313919062498385 msec\nrounds: 16"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 3744.09410790897,
            "unit": "iter/sec",
            "range": "stddev: 0.00010527657083077704",
            "extra": "mean: 267.0873036785092 usec\nrounds: 2012"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 1.754901776110141,
            "unit": "iter/sec",
            "range": "stddev: 0.003796937776976411",
            "extra": "mean: 569.832462200003 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 3479.9783925185307,
            "unit": "iter/sec",
            "range": "stddev: 0.000059670050916106085",
            "extra": "mean: 287.3581060588942 usec\nrounds: 66"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1303.7176075326506,
            "unit": "iter/sec",
            "range": "stddev: 0.00008276798738337855",
            "extra": "mean: 767.0372741935648 usec\nrounds: 248"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 83.42553681131139,
            "unit": "iter/sec",
            "range": "stddev: 0.0009407431234652259",
            "extra": "mean: 11.98673737349465 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 3520.5525515472023,
            "unit": "iter/sec",
            "range": "stddev: 0.00008243497307146247",
            "extra": "mean: 284.0463209562155 usec\nrounds: 1966"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 78.63130831274255,
            "unit": "iter/sec",
            "range": "stddev: 0.0009865546633722106",
            "extra": "mean: 12.717580585365202 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 73.48645985298283,
            "unit": "iter/sec",
            "range": "stddev: 0.01946543455080265",
            "extra": "mean: 13.607949028985777 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 3759.5744947306985,
            "unit": "iter/sec",
            "range": "stddev: 0.00011105239050999239",
            "extra": "mean: 265.98754763379964 usec\nrounds: 3170"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 222.9146646356899,
            "unit": "iter/sec",
            "range": "stddev: 0.00047888417292294235",
            "extra": "mean: 4.486021597701089 msec\nrounds: 174"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 48.382796003632855,
            "unit": "iter/sec",
            "range": "stddev: 0.0011643263675941559",
            "extra": "mean: 20.668503736843036 msec\nrounds: 38"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 82.16858480283004,
            "unit": "iter/sec",
            "range": "stddev: 0.0010608893156048374",
            "extra": "mean: 12.170101291139167 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1295166.6889168113,
            "unit": "iter/sec",
            "range": "stddev: 0.000005956095956938334",
            "extra": "mean: 772.1013893866677 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 3766.130252422924,
            "unit": "iter/sec",
            "range": "stddev: 0.00010208246499967742",
            "extra": "mean: 265.5245392420122 usec\nrounds: 1478"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1408609.3431934768,
            "unit": "iter/sec",
            "range": "stddev: 0.000012188959423711729",
            "extra": "mean: 709.9200391024575 nsec\nrounds: 105264"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9407.02431953027,
            "unit": "iter/sec",
            "range": "stddev: 0.000019938314008457346",
            "extra": "mean: 106.30354148483099 usec\nrounds: 458"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 68.57969082206924,
            "unit": "iter/sec",
            "range": "stddev: 0.0010896815670548132",
            "extra": "mean: 14.58157638235073 msec\nrounds: 34"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 218.65221439205374,
            "unit": "iter/sec",
            "range": "stddev: 0.0005227846510847349",
            "extra": "mean: 4.573473004974707 msec\nrounds: 201"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 8775731.03033445,
            "unit": "iter/sec",
            "range": "stddev: 1.1804089652118816e-7",
            "extra": "mean: 113.95062092758995 nsec\nrounds: 89286"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 615388.7391687611,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011487588265790566",
            "extra": "mean: 1.624989110705461 usec\nrounds: 13775"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 200.04053789235653,
            "unit": "iter/sec",
            "range": "stddev: 0.0005895309552562772",
            "extra": "mean: 4.998986758064549 msec\nrounds: 186"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 35.7460429365418,
            "unit": "iter/sec",
            "range": "stddev: 0.0018929381739765778",
            "extra": "mean: 27.975124457139245 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 3652.2155477160077,
            "unit": "iter/sec",
            "range": "stddev: 0.0000784740718351099",
            "extra": "mean: 273.80640242478887 usec\nrounds: 1732"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 71.76716099118372,
            "unit": "iter/sec",
            "range": "stddev: 0.0015697933414605487",
            "extra": "mean: 13.933949541669143 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 83.0549347891552,
            "unit": "iter/sec",
            "range": "stddev: 0.0011012400577895816",
            "extra": "mean: 12.04022376922718 msec\nrounds: 52"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 206.87969195971024,
            "unit": "iter/sec",
            "range": "stddev: 0.00045086308195748845",
            "extra": "mean: 4.833727228261485 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 87.66975502220728,
            "unit": "iter/sec",
            "range": "stddev: 0.001197784592186028",
            "extra": "mean: 11.406442275864624 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 8244.409645221396,
            "unit": "iter/sec",
            "range": "stddev: 0.00006136083656898972",
            "extra": "mean: 121.29431251388841 usec\nrounds: 4499"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 64.24479031257175,
            "unit": "iter/sec",
            "range": "stddev: 0.000627294214785317",
            "extra": "mean: 15.565464454544491 msec\nrounds: 11"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 4.068632415948535,
            "unit": "iter/sec",
            "range": "stddev: 0.0028006070063096664",
            "extra": "mean: 245.78283259999694 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 358420.9614508816,
            "unit": "iter/sec",
            "range": "stddev: 0.000011313343544946205",
            "extra": "mean: 2.7900153940551298 usec\nrounds: 1624"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 115909.65635471769,
            "unit": "iter/sec",
            "range": "stddev: 0.000005308295919324966",
            "extra": "mean: 8.627408892833788 usec\nrounds: 32363"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.5349137798303921,
            "unit": "iter/sec",
            "range": "stddev: 0.009168982808682679",
            "extra": "mean: 1.8694601592000026 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 7.103672612415067,
            "unit": "iter/sec",
            "range": "stddev: 0.008116382635431353",
            "extra": "mean: 140.77225325000242 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 139.03764785192843,
            "unit": "iter/sec",
            "range": "stddev: 0.0005532814990176101",
            "extra": "mean: 7.1922965862093315 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 69.18714725902865,
            "unit": "iter/sec",
            "range": "stddev: 0.0017913358107174327",
            "extra": "mean: 14.453551557142777 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 71.34598788909726,
            "unit": "iter/sec",
            "range": "stddev: 0.0023600385010016578",
            "extra": "mean: 14.016205109591242 msec\nrounds: 73"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 3718.653430821425,
            "unit": "iter/sec",
            "range": "stddev: 0.00007379038383132733",
            "extra": "mean: 268.91454624721695 usec\nrounds: 2065"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 127.34401990962824,
            "unit": "iter/sec",
            "range": "stddev: 0.004749751130745219",
            "extra": "mean: 7.852744092024629 msec\nrounds: 163"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 845.7895728585144,
            "unit": "iter/sec",
            "range": "stddev: 0.0001258982162273354",
            "extra": "mean: 1.1823271793482872 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 101.0560504377844,
            "unit": "iter/sec",
            "range": "stddev: 0.00045286962922319043",
            "extra": "mean: 9.89549854430195 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 381.30574724644447,
            "unit": "iter/sec",
            "range": "stddev: 0.00025633838348997334",
            "extra": "mean: 2.622567341880852 msec\nrounds: 351"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 218.66110928602836,
            "unit": "iter/sec",
            "range": "stddev: 0.00041198154638465563",
            "extra": "mean: 4.573286961111636 msec\nrounds: 180"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 45.85835432020909,
            "unit": "iter/sec",
            "range": "stddev: 0.008785893187973941",
            "extra": "mean: 21.806277500004292 msec\nrounds: 42"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 10071.08193026367,
            "unit": "iter/sec",
            "range": "stddev: 0.00002519478358409397",
            "extra": "mean: 99.29419767651707 usec\nrounds: 4907"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 200.84195747541847,
            "unit": "iter/sec",
            "range": "stddev: 0.0011592413834301736",
            "extra": "mean: 4.979039303191379 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 26.611803772009576,
            "unit": "iter/sec",
            "range": "stddev: 0.0018467139685350515",
            "extra": "mean: 37.577310000001006 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 79.7505226336578,
            "unit": "iter/sec",
            "range": "stddev: 0.0027343384314529725",
            "extra": "mean: 12.539102779220677 msec\nrounds: 77"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 11.097267133358988,
            "unit": "iter/sec",
            "range": "stddev: 0.005359513606943149",
            "extra": "mean: 90.11227611111077 msec\nrounds: 9"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3557.8182927478715,
            "unit": "iter/sec",
            "range": "stddev: 0.00006356155225186095",
            "extra": "mean: 281.07112778591414 usec\nrounds: 2019"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 50.51447622931477,
            "unit": "iter/sec",
            "range": "stddev: 0.0007440386417694116",
            "extra": "mean: 19.796305428574865 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 89.66544727295606,
            "unit": "iter/sec",
            "range": "stddev: 0.0011091534894173795",
            "extra": "mean: 11.152568022728298 msec\nrounds: 88"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 0.4719328706488046,
            "unit": "iter/sec",
            "range": "stddev: 0.051524555728579724",
            "extra": "mean: 2.118945431000003 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 118.54894611113909,
            "unit": "iter/sec",
            "range": "stddev: 0.0006274688286768226",
            "extra": "mean: 8.435334372880082 msec\nrounds: 118"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 76.05083337887939,
            "unit": "iter/sec",
            "range": "stddev: 0.0011721834874877423",
            "extra": "mean: 13.149099826665633 msec\nrounds: 75"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5003035.255967228,
            "unit": "iter/sec",
            "range": "stddev: 3.6386555976510143e-7",
            "extra": "mean: 199.87866341885714 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 487.40630276855876,
            "unit": "iter/sec",
            "range": "stddev: 0.00025238459763677067",
            "extra": "mean: 2.051676382352492 msec\nrounds: 442"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.5334590393853417,
            "unit": "iter/sec",
            "range": "stddev: 0.018977002368873466",
            "extra": "mean: 1.874558168800013 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 3458.2643069187425,
            "unit": "iter/sec",
            "range": "stddev: 0.000097166995712444",
            "extra": "mean: 289.16239802705644 usec\nrounds: 1216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 56645.56981669953,
            "unit": "iter/sec",
            "range": "stddev: 0.000010127458148949967",
            "extra": "mean: 17.653631223693555 usec\nrounds: 2812"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 27.298673206428603,
            "unit": "iter/sec",
            "range": "stddev: 0.002447045754896119",
            "extra": "mean: 36.63181695455106 msec\nrounds: 22"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 213.4849158333619,
            "unit": "iter/sec",
            "range": "stddev: 0.0006574420763435846",
            "extra": "mean: 4.68417169473726 msec\nrounds: 190"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.09782466763224229,
            "unit": "iter/sec",
            "range": "stddev: 0.17259324590098607",
            "extra": "mean: 10.222370534999982 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 22.72488456693894,
            "unit": "iter/sec",
            "range": "stddev: 0.03776758604886383",
            "extra": "mean: 44.00462396428801 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 536.9504932392231,
            "unit": "iter/sec",
            "range": "stddev: 0.00021451592094766443",
            "extra": "mean: 1.8623690872642116 msec\nrounds: 424"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 4538964.658928814,
            "unit": "iter/sec",
            "range": "stddev: 2.6722573238490614e-7",
            "extra": "mean: 220.31455962824845 nsec\nrounds: 192308"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 30.468440635831893,
            "unit": "iter/sec",
            "range": "stddev: 0.0015251472914189841",
            "extra": "mean: 32.82084606666634 msec\nrounds: 30"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 77.03769201060007,
            "unit": "iter/sec",
            "range": "stddev: 0.0014293261158164674",
            "extra": "mean: 12.980658868419942 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 81.01530686126081,
            "unit": "iter/sec",
            "range": "stddev: 0.0006233515497842836",
            "extra": "mean: 12.34334644578346 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 208.79342425366144,
            "unit": "iter/sec",
            "range": "stddev: 0.0004987117138763325",
            "extra": "mean: 4.789422864127695 msec\nrounds: 184"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 204.41472164561463,
            "unit": "iter/sec",
            "range": "stddev: 0.00044116542879749955",
            "extra": "mean: 4.892015564973147 msec\nrounds: 177"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 247.4711828266685,
            "unit": "iter/sec",
            "range": "stddev: 0.0008009908411762117",
            "extra": "mean: 4.040874531643593 msec\nrounds: 158"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1484683.006513675,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016269825763294655",
            "extra": "mean: 673.5444506421575 nsec\nrounds: 151516"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.082108949348615,
            "unit": "iter/sec",
            "range": "stddev: 0.014585077959633376",
            "extra": "mean: 924.1213655999786 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.5229179490599688,
            "unit": "iter/sec",
            "range": "stddev: 0.018709982228035736",
            "extra": "mean: 1.9123459077999996 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}