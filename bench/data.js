window.BENCHMARK_DATA = {
  "lastUpdate": 1682700470425,
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
            "email": "gforsyth@users.noreply.github.com",
            "name": "Gil Forsyth",
            "username": "gforsyth"
          },
          "distinct": true,
          "id": "4deafd6671418eabab6687af7c63f7ba0f4f728d",
          "message": "ci: skip sqlalchemy 2.0.11 to workaround broken ci",
          "timestamp": "2023-04-28T12:42:07-04:00",
          "tree_id": "c953c1c3b3699bc9fd1a70c092196828bafa529b",
          "url": "https://github.com/ibis-project/ibis/commit/4deafd6671418eabab6687af7c63f7ba0f4f728d"
        },
        "date": 1682700374256,
        "tool": "pytest",
        "benches": [
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[no_overwrite]",
            "value": 172.7288487186226,
            "unit": "iter/sec",
            "range": "stddev: 0.0053481137741836215",
            "extra": "mean: 5.789420860605701 msec\nrounds: 165"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort]",
            "value": 31.176030321556457,
            "unit": "iter/sec",
            "range": "stddev: 0.003603319307188695",
            "extra": "mean: 32.07592466666793 msec\nrounds: 18"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-large]",
            "value": 630.272169046987,
            "unit": "iter/sec",
            "range": "stddev: 0.00008266852860556239",
            "extra": "mean: 1.586616146342089 msec\nrounds: 41"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-snowflake]",
            "value": 1728.270749517407,
            "unit": "iter/sec",
            "range": "stddev: 0.00022085353148545403",
            "extra": "mean: 578.6130444429698 usec\nrounds: 45"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-impala]",
            "value": 10617.503791114956,
            "unit": "iter/sec",
            "range": "stddev: 0.00002070257529871888",
            "extra": "mean: 94.18409634445621 usec\nrounds: 3529"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-duckdb]",
            "value": 85.99904932924152,
            "unit": "iter/sec",
            "range": "stddev: 0.0008279574356161012",
            "extra": "mean: 11.628035516666795 msec\nrounds: 60"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[complex]",
            "value": 3753258.395556771,
            "unit": "iter/sec",
            "range": "stddev: 2.425382915692296e-8",
            "extra": "mean: 266.4351596961035 nsec\nrounds: 133316"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-snowflake]",
            "value": 85.02069207034637,
            "unit": "iter/sec",
            "range": "stddev: 0.000974258145653445",
            "extra": "mean: 11.761842625000007 msec\nrounds: 72"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-clickhouse]",
            "value": 112.73329420017465,
            "unit": "iter/sec",
            "range": "stddev: 0.0001483053787589584",
            "extra": "mean: 8.870493913043576 msec\nrounds: 92"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-duckdb]",
            "value": 221.01586351282435,
            "unit": "iter/sec",
            "range": "stddev: 0.0005118278161357456",
            "extra": "mean: 4.52456210204104 msec\nrounds: 196"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_mean]",
            "value": 0.6848334276325659,
            "unit": "iter/sec",
            "range": "stddev: 0.0024306800458027736",
            "extra": "mean: 1.460209095600004 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[trino]",
            "value": 80.85783952225312,
            "unit": "iter/sec",
            "range": "stddev: 0.0010909650226974099",
            "extra": "mean: 12.367384608696938 msec\nrounds: 69"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-postgres]",
            "value": 87.01996918841746,
            "unit": "iter/sec",
            "range": "stddev: 0.0008884988653789547",
            "extra": "mean: 11.491615192770052 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-trino]",
            "value": 1860.9192001510808,
            "unit": "iter/sec",
            "range": "stddev: 0.00010992865900072248",
            "extra": "mean: 537.3688443425239 usec\nrounds: 1529"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-medium]",
            "value": 1513.6841088278306,
            "unit": "iter/sec",
            "range": "stddev: 0.000009189246721923725",
            "extra": "mean: 660.6398218544962 usec\nrounds: 1089"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mysql]",
            "value": 241.64072332800924,
            "unit": "iter/sec",
            "range": "stddev: 0.00032859281290761324",
            "extra": "mean: 4.138375296297117 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-10]",
            "value": 1.1552806539258478,
            "unit": "iter/sec",
            "range": "stddev: 0.00032933412863307167",
            "extra": "mean: 865.5905356000062 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling_udf_wm]",
            "value": 0.7772327182208738,
            "unit": "iter/sec",
            "range": "stddev: 0.01002302287151653",
            "extra": "mean: 1.286615934399998 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_eq_datatypes[singletons]",
            "value": 5224850.755108014,
            "unit": "iter/sec",
            "range": "stddev: 1.1279177215793234e-8",
            "extra": "mean: 191.3930266854323 nsec\nrounds: 52351"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mysql]",
            "value": 1839.3842127549517,
            "unit": "iter/sec",
            "range": "stddev: 0.00010679758129032337",
            "extra": "mean: 543.660205989396 usec\nrounds: 1102"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[duckdb]",
            "value": 84.95521395698076,
            "unit": "iter/sec",
            "range": "stddev: 0.0010429774861958846",
            "extra": "mean: 11.77090791044768 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_insert_duckdb[overwrite]",
            "value": 131.86812693502887,
            "unit": "iter/sec",
            "range": "stddev: 0.005093059818990161",
            "extra": "mean: 7.583333617021025 msec\nrounds: 188"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort]",
            "value": 46.81167091122607,
            "unit": "iter/sec",
            "range": "stddev: 0.002836546310257046",
            "extra": "mean: 21.362194096775692 msec\nrounds: 31"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-impala]",
            "value": 572.0670514572323,
            "unit": "iter/sec",
            "range": "stddev: 0.00005047578721035526",
            "extra": "mean: 1.7480468372591809 msec\nrounds: 467"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-sqlite]",
            "value": 1876.0199587157379,
            "unit": "iter/sec",
            "range": "stddev: 0.00010525822756672348",
            "extra": "mean: 533.0433694770322 usec\nrounds: 249"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[clickhouse]",
            "value": 36.68648616734675,
            "unit": "iter/sec",
            "range": "stddev: 0.0006712778580964821",
            "extra": "mean: 27.25799345945707 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-bigquery]",
            "value": 449.8309198032221,
            "unit": "iter/sec",
            "range": "stddev: 0.00006649888995513325",
            "extra": "mean: 2.2230574999989963 msec\nrounds: 6"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-mssql]",
            "value": 1936.345598573628,
            "unit": "iter/sec",
            "range": "stddev: 0.00009720251535885517",
            "extra": "mean: 516.4367356409057 usec\nrounds: 1271"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_args",
            "value": 5024305.817321616,
            "unit": "iter/sec",
            "range": "stddev: 2.0235279326299136e-8",
            "extra": "mean: 199.03247062560018 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-trino]",
            "value": 235.6351549810368,
            "unit": "iter/sec",
            "range": "stddev: 0.0003942758731942213",
            "extra": "mean: 4.2438489285712775 msec\nrounds: 70"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-postgres]",
            "value": 1883.7788950329457,
            "unit": "iter/sec",
            "range": "stddev: 0.00010106609629495259",
            "extra": "mean: 530.8478625791754 usec\nrounds: 1419"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_join",
            "value": 1428686.4810931887,
            "unit": "iter/sec",
            "range": "stddev: 2.2832634515269893e-7",
            "extra": "mean: 699.9436288042913 nsec\nrounds: 109879"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_op_argnames",
            "value": 4595424.267127641,
            "unit": "iter/sec",
            "range": "stddev: 2.09095973592252e-8",
            "extra": "mean: 217.60776413036814 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-bigquery]",
            "value": 7195.809367927625,
            "unit": "iter/sec",
            "range": "stddev: 0.00009241190584861328",
            "extra": "mean: 138.96977377653872 usec\nrounds: 2860"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_sort_projection]",
            "value": 46.20559843480096,
            "unit": "iter/sec",
            "range": "stddev: 0.00036705785490301877",
            "extra": "mean: 21.642399057141606 msec\nrounds: 35"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_wm]",
            "value": 0.759199560743407,
            "unit": "iter/sec",
            "range": "stddev: 0.021959385494546634",
            "extra": "mean: 1.3171767368000076 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[str]",
            "value": 145086.30584420016,
            "unit": "iter/sec",
            "range": "stddev: 4.2996710657787363e-7",
            "extra": "mean: 6.89244925068147 usec\nrounds: 37035"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mssql]",
            "value": 74.7950005485228,
            "unit": "iter/sec",
            "range": "stddev: 0.017275643670093748",
            "extra": "mean: 13.369877567568919 msec\nrounds: 74"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[druid]",
            "value": 84.91874327138609,
            "unit": "iter/sec",
            "range": "stddev: 0.0010128429894547893",
            "extra": "mean: 11.775963249999677 msec\nrounds: 40"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_group_by]",
            "value": 131.56617160056967,
            "unit": "iter/sec",
            "range": "stddev: 0.00011451323390669185",
            "extra": "mean: 7.600738000007823 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-large]",
            "value": 1607283.8067305018,
            "unit": "iter/sec",
            "range": "stddev: 2.431518517293343e-7",
            "extra": "mean: 622.1676568957514 nsec\nrounds: 106372"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[multikey_group_by_with_mutate]",
            "value": 80.10702355738017,
            "unit": "iter/sec",
            "range": "stddev: 0.00034303426158213056",
            "extra": "mean: 12.483299910446755 msec\nrounds: 67"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_large_expr_equals",
            "value": 869926.993023052,
            "unit": "iter/sec",
            "range": "stddev: 1.793966182451975e-7",
            "extra": "mean: 1.1495217506987983 usec\nrounds: 124985"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-duckdb]",
            "value": 1852.4556711887603,
            "unit": "iter/sec",
            "range": "stddev: 0.0001249303360587747",
            "extra": "mean: 539.8239836736707 usec\nrounds: 980"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-druid]",
            "value": 90.75609036583873,
            "unit": "iter/sec",
            "range": "stddev: 0.0009329337457241666",
            "extra": "mean: 11.018544275860604 msec\nrounds: 87"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-snowflake]",
            "value": 235.60794465745468,
            "unit": "iter/sec",
            "range": "stddev: 0.00031727225694650824",
            "extra": "mean: 4.244339050000535 msec\nrounds: 140"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-impala]",
            "value": 148.26114310699293,
            "unit": "iter/sec",
            "range": "stddev: 0.0001789918812286184",
            "extra": "mean: 6.744855590910614 msec\nrounds: 132"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_grouped_rolling]",
            "value": 1.412105646530313,
            "unit": "iter/sec",
            "range": "stddev: 0.0033051049530046033",
            "extra": "mean: 708.1623123999975 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-1]",
            "value": 162.27193859517058,
            "unit": "iter/sec",
            "range": "stddev: 0.00006930600081688698",
            "extra": "mean: 6.162494936938907 msec\nrounds: 111"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates]",
            "value": 269.0894054175628,
            "unit": "iter/sec",
            "range": "stddev: 0.00004098250514387043",
            "extra": "mean: 3.7162369824565844 msec\nrounds: 228"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[medium]",
            "value": 172.8024804131167,
            "unit": "iter/sec",
            "range": "stddev: 0.000028699938767606095",
            "extra": "mean: 5.786953969695993 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-sqlite]",
            "value": 243.97618000775466,
            "unit": "iter/sec",
            "range": "stddev: 0.00039108104384262944",
            "extra": "mean: 4.09876078873034 msec\nrounds: 213"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[bigquery]",
            "value": 94.67485219467818,
            "unit": "iter/sec",
            "range": "stddev: 0.00013560079233046688",
            "extra": "mean: 10.562466978493065 msec\nrounds: 93"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-druid]",
            "value": 1862.0766469584535,
            "unit": "iter/sec",
            "range": "stddev: 0.00010309008467581984",
            "extra": "mean: 537.0348216510939 usec\nrounds: 1284"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling]",
            "value": 20.69795886723818,
            "unit": "iter/sec",
            "range": "stddev: 0.000946348469914478",
            "extra": "mean: 48.313942761904535 msec\nrounds: 21"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[str-small]",
            "value": 12033.04179828991,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018935360342999685",
            "extra": "mean: 83.10450647168167 usec\nrounds: 5408"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[large]",
            "value": 88.88596016704973,
            "unit": "iter/sec",
            "range": "stddev: 0.00008829993890323371",
            "extra": "mean: 11.250370678570931 msec\nrounds: 56"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-druid]",
            "value": 245.51434903690858,
            "unit": "iter/sec",
            "range": "stddev: 0.0003201700576119641",
            "extra": "mean: 4.073081691244321 msec\nrounds: 217"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[postgres]",
            "value": 79.77720589413957,
            "unit": "iter/sec",
            "range": "stddev: 0.001086541477640778",
            "extra": "mean: 12.534908797469678 msec\nrounds: 79"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_tpc_h02",
            "value": 980.4797067967107,
            "unit": "iter/sec",
            "range": "stddev: 0.00016892446604985706",
            "extra": "mean: 1.0199089211821255 msec\nrounds: 203"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-bigquery]",
            "value": 108.77255597130048,
            "unit": "iter/sec",
            "range": "stddev: 0.000060260118244310274",
            "extra": "mean: 9.193495464645043 msec\nrounds: 99"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[10-10]",
            "value": 7.278875825159973,
            "unit": "iter/sec",
            "range": "stddev: 0.0001783831847321955",
            "extra": "mean: 137.38385212499793 msec\nrounds: 8"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[snowflake]",
            "value": 78.9762208805642,
            "unit": "iter/sec",
            "range": "stddev: 0.0011211749721030276",
            "extra": "mean: 12.662039141025762 msec\nrounds: 78"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[simple_sort_projection]",
            "value": 80.5028574552764,
            "unit": "iter/sec",
            "range": "stddev: 0.00018559285137090059",
            "extra": "mean: 12.421919315790163 msec\nrounds: 76"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[impala]",
            "value": 138.80351508793876,
            "unit": "iter/sec",
            "range": "stddev: 0.00017072944504450434",
            "extra": "mean: 7.204428500001973 msec\nrounds: 134"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[small-clickhouse]",
            "value": 3835.746050067448,
            "unit": "iter/sec",
            "range": "stddev: 0.000032715468218158595",
            "extra": "mean: 260.70547605267456 usec\nrounds: 689"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mssql]",
            "value": 82.7635093470716,
            "unit": "iter/sec",
            "range": "stddev: 0.0012109295980389314",
            "extra": "mean: 12.08261959756281 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-postgres]",
            "value": 242.56137889632052,
            "unit": "iter/sec",
            "range": "stddev: 0.0003242416740348373",
            "extra": "mean: 4.122667856482775 msec\nrounds: 216"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_builtins[hash]",
            "value": 5666329.04950768,
            "unit": "iter/sec",
            "range": "stddev: 1.59587706960052e-8",
            "extra": "mean: 176.4811028909453 nsec\nrounds: 196079"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[100-1]",
            "value": 25.666984378523086,
            "unit": "iter/sec",
            "range": "stddev: 0.0004989863509094836",
            "extra": "mean: 38.96055669230673 msec\nrounds: 26"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_window_analytics_udf]",
            "value": 37.65038418420839,
            "unit": "iter/sec",
            "range": "stddev: 0.0004526049010702223",
            "extra": "mean: 26.560153944443087 msec\nrounds: 36"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-10]",
            "value": 16.206080701461513,
            "unit": "iter/sec",
            "range": "stddev: 0.00010196772688587858",
            "extra": "mean: 61.70523388235485 msec\nrounds: 17"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_repr_huge_union",
            "value": 94.95897957994929,
            "unit": "iter/sec",
            "range": "stddev: 0.0001563308109739422",
            "extra": "mean: 10.530862951808206 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[low_card_grouped_rolling_udf_mean]",
            "value": 2.188847049169972,
            "unit": "iter/sec",
            "range": "stddev: 0.0020597967917564803",
            "extra": "mean: 456.8615245999979 msec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[sqlite]",
            "value": 69.04439766893778,
            "unit": "iter/sec",
            "range": "stddev: 0.02356173094749555",
            "extra": "mean: 14.483434337350845 msec\nrounds: 83"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_multiple_joins[1-1]",
            "value": 356.0375512805545,
            "unit": "iter/sec",
            "range": "stddev: 0.00007006621624368945",
            "extra": "mean: 2.8086924999998346 msec\nrounds: 302"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-medium]",
            "value": 1643851.867345587,
            "unit": "iter/sec",
            "range": "stddev: 1.1497502405199063e-7",
            "extra": "mean: 608.3273194285761 nsec\nrounds: 93450"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile_with_drops[mysql]",
            "value": 84.46000075213173,
            "unit": "iter/sec",
            "range": "stddev: 0.0010631626626406666",
            "extra": "mean: 11.839924119048277 msec\nrounds: 84"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_builtins[hash-small]",
            "value": 1601727.8943548,
            "unit": "iter/sec",
            "range": "stddev: 1.4591444532362156e-7",
            "extra": "mean: 624.3257693921944 nsec\nrounds: 163935"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[high_card_window_analytics_udf]",
            "value": 0.14430962946181267,
            "unit": "iter/sec",
            "range": "stddev: 0.09427913517095349",
            "extra": "mean: 6.929544506000002 sec\nrounds: 5"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-trino]",
            "value": 85.82423891466864,
            "unit": "iter/sec",
            "range": "stddev: 0.0009561298076401877",
            "extra": "mean: 11.651719987802712 msec\nrounds: 82"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_construction[small]",
            "value": 9210.768285468464,
            "unit": "iter/sec",
            "range": "stddev: 0.000002490168986041621",
            "extra": "mean: 108.56857636704076 usec\nrounds: 5120"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-mysql]",
            "value": 89.23641725799563,
            "unit": "iter/sec",
            "range": "stddev: 0.0009741724289722323",
            "extra": "mean: 11.2061872352949 msec\nrounds: 68"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[medium-mssql]",
            "value": 243.92491630880156,
            "unit": "iter/sec",
            "range": "stddev: 0.0003500577224071425",
            "extra": "mean: 4.099622191666678 msec\nrounds: 240"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_complex_datatype_parse",
            "value": 9707604.399357336,
            "unit": "iter/sec",
            "range": "stddev: 4.725997488711916e-9",
            "extra": "mean: 103.01202633132134 nsec\nrounds: 96154"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_execute[cast_to_dates_from_strings]",
            "value": 43.46399380082825,
            "unit": "iter/sec",
            "range": "stddev: 0.0003821805861008434",
            "extra": "mean: 23.007549756758525 msec\nrounds: 37"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-clickhouse]",
            "value": 35.77175746849585,
            "unit": "iter/sec",
            "range": "stddev: 0.0010968870746471948",
            "extra": "mean: 27.95501453571855 msec\nrounds: 28"
          },
          {
            "name": "ibis/tests/benchmarks/test_benchmarks.py::test_compile[large-sqlite]",
            "value": 78.03991192655084,
            "unit": "iter/sec",
            "range": "stddev: 0.0009544353623746731",
            "extra": "mean: 12.813956029847576 msec\nrounds: 67"
          }
        ]
      }
    ]
  }
}